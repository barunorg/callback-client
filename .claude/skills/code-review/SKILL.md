---
name: code-review
description: Review code for bugs, security vulnerabilities, code smells, and structural problems. Use this skill whenever the user asks you to "review my code", "check for bugs", "find security issues", "look over this PR", or evaluate code against principles like SOLID, DRY, or KISS — even if they don't use the exact word "review". Works with any language, framework, frontend, backend, scripts, or config files.
allowed-tools: "Bash, WebFetch"
---

# Code Review Skill

Review code as a senior engineer would: take ownership of the review, surface issues the author may not have flagged, and give feedback that is specific and actionable.

## Review procedure

Work through the code in this order, stopping to report as you go:

1. **Correctness & bugs** — logical errors, wrong assumptions, unhandled edge cases, off-by-one errors, null/undefined handling, concurrency issues. Trace execution mentally or with a debugger to confirm the root cause before reporting.
2. **Security** — injection (SQL, command, etc.), XSS, insecure deserialization, missing input validation, missing output encoding, secrets in code, unsafe data handling. Run a security scanner when available and prioritize findings by severity.
3. **Structure & design** — duplication, overly large functions/classes, poor separation of concerns, leaky abstractions.
4. **Readability & style** — naming, dead code, comments, conformance to the project's existing conventions.

Report critical issues (correctness, security, performance) before minor style concerns.

## Output format

For each finding, provide:

- **Severity**: critical / major / minor
- **Location**: file and line(s)
- **Issue**: what's wrong, stated specifically
- **Fix**: a concrete suggestion or code snippet

Group findings by severity, critical first. End with a short summary of overall code health.

## Principles to enforce

Flag violations of these, with the specific fix:

- **DRY** — don't repeat a piece of logic that appears in more than one place; extract it.
- **KISS** — prefer the simplest solution that works; flag unnecessary abstraction or premature optimization that hurts readability.
- **SOLID**
  - _Single Responsibility_ — each class/module has one reason to change.
  - _Open/Closed_ — open for extension, closed for modification.
  - _Liskov Substitution_ — subtypes must be usable in place of their base types without surprises.
  - _Interface Segregation_ — clients shouldn't depend on interfaces they don't use; prefer focused interfaces.
  - _Dependency Inversion_ — depend on abstractions, not concrete implementations.
- **Project conventions** — match the existing naming, formatting, and documentation style of the codebase.

## Consistency with existing code

New or modified code must blend in with the surrounding code, not stand apart from it. Before reviewing in isolation, look at how the existing codebase is written and check the changes against it:

- **Function declaration style** — match what the file/project already uses (e.g. arrow functions vs. `function` declarations, named vs. anonymous, `async` patterns). Flag a new function written in a style that conflicts with its neighbors.
- **Style and formatting** — follow the existing indentation, quote style, semicolon usage, import ordering, and naming conventions already present in the code.
- **Patterns** — reuse the project's established patterns (error handling, return shapes, module structure) rather than introducing a new one for the same job.

The goal: a reader shouldn't be able to tell the new code was written separately from the old.

## Prefer native and simple solutions

- If something can be done with a simpler approach or simpler logic, prefer that over a clever or complex one.
- Prefer built-in Node.js / JavaScript native APIs and functions over external packages whenever they do the job. Flag dependencies that exist only to do something the language already does natively.
- Never use deprecated modules, methods, or functions. If you spot one, point it out and suggest the current native replacement.
- Don't add complexity unless it's actually required. Avoid speculative abstraction.
- Optimize for future readability: someone reading the logic later should understand it quickly. If a reviewer can't follow the logic on a first read, that's a finding worth raising.

## JSDoc / documentation

Only ask for JSDoc where it earns its place — don't require it everywhere:

- **Skip it** for simple functions whose purpose is obvious from the name and a short, self-explanatory signature.
- **Add it** when the function is complex, when its purpose isn't clear from the name, when it takes many parameters, or when it's consumed from another file and the caller would benefit from seeing the return type on hover. In those cases, document the parameters and especially the return value so editors surface it on hover.

## Tone

Be respectful and constructive. Focus feedback on the code, not the author. Explain _why_ a change helps (e.g. reduced coupling, fewer edge-case failures), not just _what_ to change.
