# ==========================================
# Fix misnamed product files (two-pass rename)
# ==========================================

$folder = "C:\Users\User\laser-tech-web\public\products"

if (-not (Test-Path $folder)) {
    Write-Host "ERROR: Folder not found: $folder" -ForegroundColor Red
    exit
}

# ==========================================
# PASS 1: Move wrong files to temp names
# ==========================================

$pass1 = @{
    "clock-family.jpg"       = "tmp-a.jpg"
    "clock-noordin-2.jpg"    = "tmp-b.jpg"
    "clock-silmiya.jpg"      = "tmp-c.jpg"
    "led-crown-na.jpg"       = "tmp-d.jpg"
    "notebook-jannath.jpg"   = "tmp-e.jpg"
    "notebook-mischa.jpg"    = "tmp-f.jpg"
    "notebook-ronaldo.jpg"   = "tmp-g.jpg"
    "notebook-roses.jpg"     = "tmp-h.jpg"
    "notebook-school-2.jpg"  = "tmp-i.jpg"
    "plaque-appreciation.jpg"= "tmp-j.jpg"
    "star-awards.jpg"        = "tmp-k.jpg"
    "teacher-awards.jpg"     = "tmp-l.jpg"
    "teacher-flame.jpg"      = "tmp-m.jpg"
}

Write-Host ""
Write-Host "PASS 1: Moving wrong files to temp names..." -ForegroundColor Cyan
foreach ($old in $pass1.Keys) {
    $oldPath = Join-Path $folder $old
    $newPath = Join-Path $folder $pass1[$old]
    if (Test-Path $oldPath) {
        Move-Item -Path $oldPath -Destination $newPath -Force
        Write-Host "  $old  ->  $($pass1[$old])" -ForegroundColor Green
    } else {
        Write-Host "  SKIP: $old (not found)" -ForegroundColor Yellow
    }
}

# ==========================================
# PASS 2: Rename temp files to correct names
# ==========================================

$pass2 = @{
    "tmp-a.jpg" = "notebook-dhananya.jpg"
    "tmp-b.jpg" = "plaque-amazing.jpg"
    "tmp-c.jpg" = "notebook-jannath.jpg"
    "tmp-d.jpg" = "board-rizlan.jpg"
    "tmp-e.jpg" = "plaque-amazing-2.jpg"
    "tmp-f.jpg" = "notebook-ronaldo.jpg"
    "tmp-g.jpg" = "notebook-roses.jpg"
    "tmp-h.jpg" = "teacher-awards-wooden.jpg"
    "tmp-i.jpg" = "save-the-date-2.jpg"
    "tmp-j.jpg" = "board-aashif-2.jpg"
    "tmp-k.jpg" = "award-arch.jpg"
    "tmp-l.jpg" = "led-birthday-is.jpg"
    "tmp-m.jpg" = "board-rn-wedding.jpg"
}

Write-Host ""
Write-Host "PASS 2: Renaming temp files to final names..." -ForegroundColor Cyan
foreach ($old in $pass2.Keys) {
    $oldPath = Join-Path $folder $old
    $newPath = Join-Path $folder $pass2[$old]
    if (Test-Path $oldPath) {
        Move-Item -Path $oldPath -Destination $newPath -Force
        Write-Host "  $old  ->  $($pass2[$old])" -ForegroundColor Green
    } else {
        Write-Host "  SKIP: $old (not found)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Done! 13 files fixed." -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan