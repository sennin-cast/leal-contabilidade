$ErrorActionPreference = "Stop"
$required = @(
  "AGENTS.md",
  "DESIGN.md",
  ".agents/rules/01-design-quality.md",
  ".agents/rules/02-frontend-engineering.md",
  ".agents/rules/03-responsive-accessibility.md",
  ".agents/rules/04-quality-assurance.md",
  ".agents/skills/frontend-elite-engine/SKILL.md",
  ".agents/skills/frontend-elite-engine/references/workflow.md",
  ".agents/skills/frontend-elite-engine/references/skill-routing.md",
  ".agents/skills/frontend-elite-engine/references/quality-gates.md"
)
$missing = @()
foreach ($path in $required) {
  if (Test-Path -LiteralPath $path) { Write-Host "[OK] $path" -ForegroundColor Green }
  else { Write-Host "[MISSING] $path" -ForegroundColor Red; $missing += $path }
}
if ($missing.Count -gt 0) {
  Write-Host "`nEngine incompleto: $($missing.Count) arquivo(s) ausente(s)." -ForegroundColor Red
  exit 1
}
Write-Host "`nArquivos do Frontend Elite Engine presentes." -ForegroundColor Green
Write-Host "Este teste não verifica instalação de skills externas nem ferramentas de navegador."
