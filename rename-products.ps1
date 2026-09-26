# ==========================================
# Laser Tech Product Photo Renamer
# ==========================================

$source = "C:\Users\User\Downloads\laser-photos"
$destination = "C:\Users\User\laser-tech-web\public\products"

# Create destination if it doesn't exist
if (-not (Test-Path $destination)) {
    New-Item -ItemType Directory -Path $destination | Out-Null
    Write-Host "Created: $destination" -ForegroundColor Green
}

# Mapping: UUID → clean product filename
$mapping = @{
    "efdacb01-b5fa-45f9-a3d8-dc78fd77037d" = "teacher-awards.jpg"
    "694a3ce3-8f96-4706-a025-42866e4769e7" = "teacher-flame.jpg"
    "649cb41f-f0cc-4ff9-8760-de6f190aa3e5" = "led-clock-sm.jpg"
    "486308ca-0c1c-47bc-8cce-cbe86ec4f988" = "led-monogram-r.jpg"
    "040439e4-858e-4eb5-9487-8fad0a8b7376" = "led-wedding-wn.jpg"
    "04042575-5828-4f35-9147-35e7f12b9a6d" = "led-birthday-hs.jpg"
    "25acd79e-0ec4-4ade-8695-27851ebe2661" = "notebook-school.jpg"
    "166186b5-5eab-4e6e-8032-a6ae045760ed" = "plaque-appreciation.jpg"
    "4fd93779-c5b9-47f4-8a4d-e9b90c741815" = "led-crown-na.jpg"
    "528eb2c7-2225-41ed-9a93-6c316a4a7832" = "save-the-date.jpg"
    "0bc8eae5-02c0-450d-8e09-6ab403f9a26a" = "professor-plaque.jpg"
    "5e9aac93-53e4-4951-942b-d397477b6c3d" = "star-awards.jpg"
    "25f9dc6f-d67d-425a-b13f-9474fbbb516a" = "notebook-leaves.jpg"
    "77ada6b8-2952-4a07-9794-bfaf39f0e711" = "notebook-linhta.jpg"
    "a8fe8de3-0afd-4179-ac36-1f4fa425af2d" = "notebook-jannath.jpg"
    "f49c7e9d-45ad-4d60-9e36-9883c2393187" = "notebook-roses.jpg"
    "1a062161-b910-42da-9419-7fd8221789f9" = "notebook-mischa.jpg"
    "636db878-6e0e-4b6d-9ce9-d9bdf24ab791" = "notebook-ronaldo.jpg"
    "e4bcff2b-299e-4a41-a293-00549490cb1c" = "clock-silmiya.jpg"
    "9fba1311-b277-41f1-a259-ad9805d25bf3" = "clock-family.jpg"
    "c0d10fa6-7e97-4128-b90b-1982d2b24be0" = "clock-noordin-2.jpg"
    "474f27fb-25c7-40c5-89a4-2afd555bb2c3" = "board-aashif.jpg"
    "6fcb5d6e-f900-4598-a995-2ee45d7d3654" = "notebook-jannath-2.jpg"
    "495a94b2-bf3f-44c0-911e-9d4effdd8316" = "clock-rizlan.jpg"
    "ba84baae-7da7-4553-b626-7ab20726a89a" = "clock-reunion.jpg"
    "09630352-0a15-45a0-8eba-bda16df41dab" = "clock-ksh.jpg"
    "1b24490f-70b9-4866-8f50-7cb1af77d4ee" = "notebook-school-2.jpg"
}

Write-Host ""
Write-Host "Source:      $source" -ForegroundColor Cyan
Write-Host "Destination: $destination" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path $source)) {
    Write-Host "ERROR: Source folder not found: $source" -ForegroundColor Red
    exit
}

$files = Get-ChildItem -Path $source -File
$renamed = 0
$skipped = 0

foreach ($file in $files) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    if ($mapping.ContainsKey($baseName)) {
        $newName = $mapping[$baseName]
        $newPath = Join-Path $destination $newName
        Move-Item -Path $file.FullName -Destination $newPath -Force
        Write-Host "OK  $($file.Name)  ->  $newName" -ForegroundColor Green
        $renamed++
    } else {
        Write-Host "SKIP: $($file.Name) (not in mapping)" -ForegroundColor Yellow
        $skipped++
    }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Renamed: $renamed files" -ForegroundColor Green
Write-Host " Skipped: $skipped files" -ForegroundColor Yellow
Write-Host " Saved to: $destination" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan