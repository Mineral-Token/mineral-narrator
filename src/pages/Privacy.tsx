import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Card className="card-mineral p-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  Mineral Token (MXTK) is committed to protecting your privacy. We collect minimal information necessary to provide our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic contact information when you voluntarily provide it</li>
                  <li>Technical data such as IP addresses and browser information for security purposes</li>
                  <li>Blockchain transaction data (publicly available on the blockchain)</li>
                  <li>Communications when you contact us for support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">Your information is used exclusively for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and improving our tokenization services</li>
                  <li>Communicating important updates about MXTK</li>
                  <li>Ensuring compliance with applicable regulations</li>
                  <li>Protecting against fraud and unauthorized access</li>
                  <li>Enhancing user experience and platform security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do NOT sell, trade, or transfer your personal information to third parties, except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When required by law or regulatory authorities</li>
                  <li>To trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement industry-leading security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Multi-factor authentication systems</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure cloud infrastructure with 99.9% uptime guarantee</li>
                  <li>Blockchain-based immutable record keeping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information at any time</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability for your tokenized assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Cookie Policy</h2>
                <p className="mb-4">
                  We use essential cookies only to ensure platform functionality. We do not use tracking cookies for advertising purposes. You can disable cookies in your browser, though this may affect platform performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
                <p className="mb-4">
                  Your data may be processed in countries where we operate. We ensure adequate protection through appropriate safeguards and comply with applicable data protection laws including GDPR and CCPA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="mb-4">
                  For privacy-related questions or to exercise your rights, contact our Data Protection Officer:
                </p>
                <p className="font-semibold">
                  Email: <a href="mailto:privacy@mineral-token.com" className="text-primary hover:underline">privacy@mineral-token.com</a>
                </p>
                <p>Response time: 48 hours for all privacy inquiries</p>
              </section>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> This privacy policy is designed to protect your interests while enabling Mineral Token to revolutionize asset liquidity through blockchain technology. We believe privacy and innovation can coexist.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;