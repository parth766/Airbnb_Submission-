# Production-Scale Marketplace System Architecture

This document presents the end-to-end cloud production architecture for an enterprise-grade vacation rental marketplace (such as Airbnb), designed for global multi-region active-active deployment, sub-100ms API latencies, high throughput, and zero data loss.

---

## 1. Global Anycast Edge & Client Layer
- **Client Frontend**: React 18 / Next.js single-page & server-side rendered progressive web application with responsive design tokens.
- **Global Anycast Edge CDN (Cloudflare)**:
  - DDoS protection and WAF bot filtering.
  - Geo-DNS routing to nearest regional edge node.
- **Edge SSR / ISR Cluster**:
  - Next.js Edge Runtime serving pre-rendered listing HTML templates with Incremental Static Regeneration (ISR).
- **Image Pipeline (CloudFront / Imgix)**:
  - On-the-fly image optimization, responsive resizing, and format conversion (AVIF / WebP / JPEG).

---

## 2. API Gateway & Core Microservices Layer
- **API Gateway (Kong / Envoy)**:
  - Central entry point with OAuth2 / JWT authentication, rate limiting, and gRPC routing.
- **Core Microservices**:
  1. **Listing Service**: Manages property metadata, room categories, features, and host policies.
  2. **Reservation Lock Service**: Uses Redis Redlock algorithms to prevent concurrent double-bookings.
  3. **Dynamic Pricing Engine**: Calculates demand-driven seasonal rates, cleaning fees, and currency conversions.
  4. **User & Host Service**: User profiles, Superhost verification, identity checks, and trust metrics.
  5. **Realtime Messaging Service**: WebSockets over Socket.io for instant host-guest messaging.
  6. **Payment & Payout Engine**: PCI-compliant escrow payment flow supporting Stripe, Apple Pay, and local payout rails.
  7. **Review & Rating Service**: Double-blind review submission system publishing reviews after both parties submit or 14 days expire.

---

## 3. Search, Geolocation & Event Bus
- **Elasticsearch / OpenSearch Cluster**:
  - Spatial indexing utilizing Uber H3 hexagonal spatial grids for fast map bounding box lookups and spatial clustering.
- **Apache Kafka Event Bus**:
  - Asynchronous event streaming (Bookings, Cancellation Events, Payment Statuses, User Audits).
  - Debezium Change Data Capture (CDC) syncing relational writes into Elasticsearch indexers.
- **Redis Enterprise Cluster**:
  - L2 cache for listing data and active user sessions.

---

## 4. Persistent Storage & Multi-Region Infrastructure
- **Distributed SQL (CockroachDB / Multi-Region PostgreSQL)**:
  - Active-Active transactional database spanning multi-region cloud zones (US-East, EU-West, AP-South) with ACID guarantees.
- **Object Storage (AWS S3)**:
  - High-res photo & video storage with presigned direct upload links.
- **Kubernetes (EKS/GKE)**:
  - GitOps CD via ArgoCD, Horizontal Pod Autoscaling (HPA), and full Datadog / Prometheus observability.
