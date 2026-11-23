import JsonLd from "@/components/shared/JsonLd";
import { getApplicationSteps, getPricingPlans } from "@/lib/api/landingApi";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants/site";

/**
 * schema.org Organization, WebSite and SoftwareApplication (features, prices,
 * audience, keywords) so Google can show a rich result for the home page.
 */
export default async function LandingStructuredData() {
  const [pricingPlans, applicationSteps] = await Promise.all([
    getPricingPlans(),
    getApplicationSteps(),
  ]);
  const organizationId = `${SITE_URL}/#organization`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": organizationId,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/icon.svg`,
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            description: SITE_DESCRIPTION,
            inLanguage: "en-US",
            publisher: { "@id": organizationId },
          },
          {
            "@type": "SoftwareApplication",
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            image: `${SITE_URL}${OG_IMAGE.url}`,
            description: SITE_DESCRIPTION,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Job search",
            operatingSystem: "Web",
            keywords: SITE_KEYWORDS.join(", "),
            featureList: applicationSteps.map((step) => step.title),
            audience: {
              "@type": "Audience",
              audienceType:
                "International students on F-1, CPT, OPT and H-1B visas",
            },
            publisher: { "@id": organizationId },
            offers: pricingPlans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.price.replace("$", ""),
              priceCurrency: "USD",
              url: `${SITE_URL}/#pricing`,
            })),
          },
        ],
      }}
    />
  );
}
