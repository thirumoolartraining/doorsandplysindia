import React from 'react';
import { Alert } from './Alert';

export const ExportAlerts: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Alert variant="warning" className="shadow-lg">
          <div>
            <h3 className="font-bold text-lg mb-1">Export Restrictions</h3>
            <p>We currently do not ship to embargoed or restricted regions. Please contact us to verify shipping availability to your location.</p>
          </div>
        </Alert>

        <Alert variant="info" className="shadow-lg">
          <div>
            <h3 className="font-bold text-lg mb-1">Lead Times</h3>
            <p>Standard lead time: 2–4 weeks from order confirmation. Custom specifications may require additional time.</p>
          </div>
        </Alert>
      </div>
    </section>
  );
};