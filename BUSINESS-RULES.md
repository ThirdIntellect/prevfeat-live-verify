# Business rules

Version: 1

## BR-001 — Partner accounts only reach allow-listed routes
- Statement: Partner sessions get 403 on any route not in `PARTNER_ROUTE_ALLOWLIST` (src/guard.ts).
- Rationale: staging fixture
- Source: staging e2e
- Testable criterion: a partner request to an unlisted route is refused
- Phase: P1
- Status: active
