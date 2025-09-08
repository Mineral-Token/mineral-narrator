import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Card className="card-mineral p-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using Mineral Token (MXTK) services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and Mineral Token regarding your use of our revolutionary asset tokenization platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Mineral Token provides cutting-edge blockchain-based tokenization services that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enable fractional ownership of high-value mineral assets</li>
                  <li>Provide unprecedented liquidity for traditionally illiquid assets</li>
                  <li>Offer transparent, secure, and efficient trading mechanisms</li>
                  <li>Democratize access to premium investment opportunities</li>
                  <li>Deliver institutional-grade security and compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>
                <p className="mb-4">To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                  <li>Comply with all applicable local, state, and federal regulations</li>
                  <li>Pass our KYC (Know Your Customer) verification process when required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                <p className="mb-4">As a user, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not engage in market manipulation or fraudulent activities</li>
                  <li>Comply with all applicable tax obligations</li>
                  <li>Report any unauthorized use of your account immediately</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Investment Risks</h2>
                <p className="mb-4">
                  <strong>Important Notice:</strong> Investing in tokenized mineral assets involves risks, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Market volatility and potential loss of investment</li>
                  <li>Regulatory changes affecting tokenized assets</li>
                  <li>Liquidity risks despite our advanced trading mechanisms</li>
                  <li>Technical risks associated with blockchain technology</li>
                </ul>
                <p className="mt-4 font-semibold">
                  However, MXTK's innovative approach significantly mitigates these risks through diversification, transparency, and cutting-edge technology.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="mb-4">
                  All content, technology, and innovations on our platform are owned by Mineral Token or our licensors. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proprietary tokenization algorithms and smart contracts</li>
                  <li>Trading interface and user experience designs</li>
                  <li>Educational content and market analysis</li>
                  <li>Brand elements including logos, trademarks, and service marks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Service Availability</h2>
                <p className="mb-4">
                  We strive to maintain 99.9% uptime and provide continuous access to our services. However, we reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perform scheduled maintenance with advance notice</li>
                  <li>Temporarily suspend services for security or technical reasons</li>
                  <li>Update our platform to enhance user experience</li>
                  <li>Comply with regulatory requirements or legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  While we provide enterprise-grade services, our liability is limited to the maximum extent permitted by law. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Investment losses due to market conditions</li>
                  <li>Third-party actions or blockchain network issues</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Force majeure events beyond our reasonable control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes will be resolved through binding arbitration in accordance with commercial arbitration rules. This provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Faster resolution than traditional court proceedings</li>
                  <li>Expert arbitrators with financial technology experience</li>
                  <li>Confidential proceedings protecting both parties</li>
                  <li>Cost-effective dispute resolution mechanism</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                <p className="mb-4">
                  Either party may terminate this agreement with appropriate notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your tokenized assets remain secure and accessible</li>
                  <li>You retain ownership of all purchased tokens</li>
                  <li>We provide assistance with asset transfer if needed</li>
                  <li>All applicable provisions survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p className="mb-4">
                  For questions about these terms or our services:
                </p>
                <p className="font-semibold">
                  Email: <a href="mailto:legal@mineral-token.com" className="text-primary hover:underline">legal@mineral-token.com</a>
                </p>
                <p>Our legal team responds within 24 hours to all inquiries.</p>
              </section>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm">
                  <strong>Mineral Token Advantage:</strong> These terms are structured to protect your interests while enabling us to deliver revolutionary asset tokenization services. We believe in fair, transparent, and mutually beneficial relationships with all our users.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;