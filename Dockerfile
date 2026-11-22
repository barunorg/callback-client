# ---- Base ----
FROM node:20-alpine AS base

# ---- Dependencies ----
FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

# ---- Builder ----
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build

# ---- Runner ----
FROM base AS runner
WORKDIR /app

# Security: don't run as root
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
USER nextjs

# Copy necessary build artifacts
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 80
ENV PORT=80
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
