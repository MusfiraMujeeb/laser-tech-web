// ==========================================
// TYPES
// ==========================================

export type QuotationStatus =
  | "Draft"
  | "Sent"
  | "Awaiting Reply"
  | "Approved"
  | "Rejected"
  | "Expired"
  | "Converted to Order";

export type QuotationItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Quotation = {
  id: string;
  inquiryId: string | null;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  items: QuotationItem[];
  discountType: "percentage" | "fixed";
  discountValue: number;
  deliveryFee: number;
  notes: string;
  validUntil: string;
  status: QuotationStatus;
  createdAt: string;
  updatedAt: string;
};

export type Inquiry = {
  id: string;
  serviceType: string;
  material: string;
  dimensions: string;
  quantity: string;
  inscription: string;
  instructions: string;
  delivery: string;
  requiredDate: string;
  name: string;
  phone: string;
  email: string;
  fileName: string | null;
  createdAt: string;
  status: string;
};

// ==========================================
// CALCULATIONS
// ==========================================

export function calcSubtotal(items: QuotationItem[]): number {
  return items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
}

export function calcDiscount(
  subtotal: number,
  type: "percentage" | "fixed",
  value: number
): number {
  if (type === "percentage") {
    return Math.round((subtotal * value) / 100);
  }
  return Math.min(value, subtotal);
}

export function calcTotal(
  items: QuotationItem[],
  discountType: "percentage" | "fixed",
  discountValue: number,
  deliveryFee: number
): {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
} {
  const subtotal = calcSubtotal(items);
  const discount = calcDiscount(subtotal, discountType, discountValue);
  const total = Math.max(0, subtotal - discount + deliveryFee);
  return { subtotal, discount, deliveryFee, total };
}

// ==========================================
// ID GENERATION
// ==========================================

export function generateQuotationId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `LT-Q-${year}-${random}`;
}

// ==========================================
// FORMATTING
// ==========================================

export function formatLKR(amount: number): string {
  return `LKR ${amount.toLocaleString("en-LK")}`;
}

export function formatDate(isoString: string): string {
  if (!isoString) return "—";
  try {
    return new Date(isoString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return isoString;
  }
}

// ==========================================
// WHATSAPP MESSAGE BUILDER
// ==========================================

export function buildQuotationWhatsAppMessage(q: Quotation): string {
  const { subtotal, discount, deliveryFee, total } = calcTotal(
    q.items,
    q.discountType,
    q.discountValue,
    q.deliveryFee
  );

  const lines: string[] = [
    `*LASER TECH — QUOTATION*`,
    `Quote #: ${q.id}`,
    `Date: ${formatDate(q.createdAt)}`,
    `Valid Until: ${formatDate(q.validUntil)}`,
    ``,
    `Dear ${q.customerName},`,
    ``,
    `Thank you for your inquiry. Please find our quotation below:`,
    ``,
    `*ITEMS:*`,
  ];

  q.items.forEach((item, idx) => {
    lines.push(
      `${idx + 1}. ${item.description}`,
      `    ${item.quantity} × ${formatLKR(item.unitPrice)} = ${formatLKR(
        item.quantity * item.unitPrice
      )}`
    );
  });

  lines.push(
    ``,
    `Subtotal: ${formatLKR(subtotal)}`
  );

  if (discount > 0) {
    const label =
      q.discountType === "percentage"
        ? `Discount (${q.discountValue}%)`
        : "Discount";
    lines.push(`${label}: -${formatLKR(discount)}`);
  }

  if (deliveryFee > 0) {
    lines.push(`Delivery: ${formatLKR(deliveryFee)}`);
  }

  lines.push(
    `─────────────────`,
    `*TOTAL: ${formatLKR(total)}*`,
    `─────────────────`
  );

  if (q.notes) {
    lines.push(``, `*Notes:*`, q.notes);
  }

  lines.push(
    ``,
    `Laser Tech`,
    `33/1 Kandy - Colombo Rd, Mawanella`,
    `+94 75 799 1141`
  );

  return lines.join("\n");
}

// ==========================================
// STORAGE HELPERS
// ==========================================

const QUOTES_KEY = "laserTechQuotations";
const INQUIRIES_KEY = "laserTechInquiries";

export function loadQuotations(): Quotation[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(QUOTES_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveQuotations(quotations: Quotation[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(QUOTES_KEY, JSON.stringify(quotations));
}

export function loadInquiries(): Inquiry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(INQUIRIES_KEY) || "[]");
  } catch {
    return [];
  }
}

// ==========================================
// STATUS HELPERS
// ==========================================

export function getStatusColor(status: QuotationStatus): string {
  switch (status) {
    case "Draft":
      return "status-pending";
    case "Sent":
    case "Awaiting Reply":
      return "status-active";
    case "Approved":
    case "Converted to Order":
      return "status-success";
    case "Rejected":
    case "Expired":
      return "status-error";
    default:
      return "status-pending";
  }
}