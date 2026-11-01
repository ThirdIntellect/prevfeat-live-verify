# Business Rules — prevfeat-live-verify
Version: 7
Derived from: repository source

## BR-001 — Throwaway rule one
- Statement: S1
- Rationale: R1
- Source: README.md
- Testable criterion: C1
- Phase: P1
- Status: active

## BR-002 — Throwaway rule two
- Statement: S2
- Rationale: R2
- Source: README.md
- Testable criterion: C2
- Phase: P1
- Status: active

## BR-003 — Throwaway rule three
- Statement: S3
- Rationale: R3
- Source: README.md
- Testable criterion: C3
- Phase: P1
- Status: active

## BR-004 — Export stays read-only
- Statement: The export is a GET and never mutates; see BR-005 for the cell format.
- Rationale: R
- Source: e2e/export-route.ts
- Testable criterion: C
- Phase: P1
- Status: active

## BR-005 — Native cells
- Statement: Money and dates are native cells.
- Rationale: R
- Source: e2e/export-route.ts
- Testable criterion: C
- Phase: P1
- Status: active
