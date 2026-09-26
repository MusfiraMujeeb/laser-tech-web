import { Quotation, calcTotal, formatLKR, formatDate } from "@/lib/quotationUtils";

export default function QuotationPrintTemplate({
  quotation,
}: {
  quotation: Quotation;
}) {
  const { subtotal, discount, deliveryFee, total } = calcTotal(
    quotation.items,
    quotation.discountType,
    quotation.discountValue,
    quotation.deliveryFee
  );

  return (
    <div
      id="quotation-print-area"
      className="bg-white text-charcoal p-10 max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-copper pb-6 mb-6">
        <div>
          <h1 className="font-heading text-4xl font-bold text-walnut">
            LASER<span className="text-copper">TECH</span>
          </h1>
          <p className="text-xs italic text-taupe mt-1">
            The Art of Engraving, Uniquely Yours.
          </p>
        </div>
        <div className="text-right text-xs text-taupe leading-relaxed">
          <p className="font-bold text-walnut">Laser Tech</p>
          <p>33/1 Kandy - Colombo Rd</p>
          <p>Mawanella, Sri Lanka</p>
          <p>+94 75 799 1141</p>
          <p>lasertech0024@gmail.com</p>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-walnut">
          QUOTATION
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
          <div>
            <p>
              <span className="font-bold text-walnut">Quote #:</span>{" "}
              <span className="font-mono">{quotation.id}</span>
            </p>
            <p>
              <span className="font-bold text-walnut">Date:</span>{" "}
              {formatDate(quotation.createdAt)}
            </p>
          </div>
          <div className="text-right">
            <p>
              <span className="font-bold text-walnut">Valid Until:</span>{" "}
              {formatDate(quotation.validUntil)}
            </p>
            <p>
              <span className="font-bold text-walnut">Status:</span>{" "}
              {quotation.status}
            </p>
          </div>
        </div>
      </div>

      {/* Customer */}
      <div className="bg-sand/40 border border-wood-border rounded-lg p-4 mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-copper mb-2">
          Prepared For
        </p>
        <p className="font-bold text-walnut">{quotation.customerName}</p>
        <p className="text-sm text-taupe">{quotation.customerPhone}</p>
        <p className="text-sm text-taupe">{quotation.customerEmail}</p>
      </div>

      {/* Items Table */}
      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="border-b-2 border-walnut">
            <th className="text-left py-2 font-bold text-walnut">#</th>
            <th className="text-left py-2 font-bold text-walnut">
              Description
            </th>
            <th className="text-right py-2 font-bold text-walnut">Qty</th>
            <th className="text-right py-2 font-bold text-walnut">
              Unit Price
            </th>
            <th className="text-right py-2 font-bold text-walnut">Total</th>
          </tr>
        </thead>
        <tbody>
          {quotation.items.map((item, idx) => (
            <tr key={idx} className="border-b border-wood-border">
              <td className="py-3">{idx + 1}</td>
              <td className="py-3">{item.description}</td>
              <td className="py-3 text-right">{item.quantity}</td>
              <td className="py-3 text-right">
                {formatLKR(item.unitPrice)}
              </td>
              <td className="py-3 text-right font-bold">
                {formatLKR(item.quantity * item.unitPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end mb-6">
        <div className="w-full max-w-xs space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-taupe">Subtotal</span>
            <span className="font-bold">{formatLKR(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-copper">
              <span>
                Discount
                {quotation.discountType === "percentage"
                  ? ` (${quotation.discountValue}%)`
                  : ""}
              </span>
              <span className="font-bold">-{formatLKR(discount)}</span>
            </div>
          )}
          {deliveryFee > 0 && (
            <div className="flex justify-between">
              <span className="text-taupe">Delivery</span>
              <span className="font-bold">{formatLKR(deliveryFee)}</span>
            </div>
          )}
          <div className="flex justify-between border-t-2 border-walnut pt-2 text-lg">
            <span className="font-bold text-walnut">Total</span>
            <span className="font-bold text-copper">
              {formatLKR(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {quotation.notes && (
        <div className="border-t border-wood-border pt-4 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-copper mb-2">
            Notes
          </p>
          <p className="text-sm text-taupe whitespace-pre-wrap">
            {quotation.notes}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-wood-border pt-4 text-xs text-taupe text-center">
        <p className="font-bold text-walnut mb-1">Thank you for choosing Laser Tech.</p>
        <p>
          Payment: 50% advance, 50% on delivery (unless otherwise agreed).
        </p>
        <p className="mt-1 italic">
          The Art of Engraving, Uniquely Yours.
        </p>
      </div>
    </div>
  );
}