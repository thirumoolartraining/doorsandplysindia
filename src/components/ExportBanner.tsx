import React from 'react';
import { Alert } from './Alert';
import { Button } from './Button';
import { Container } from './Container';

export const ExportBanner: React.FC = () => {
  return (
    <section className="py-12">
      <Container size="4xl" padding="md">
        <Alert variant="warning" className="shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-1">UPVC Doors - Global Supply Available</h3>
              <p>We supply premium UPVC doors globally through our export network. Get your custom quote today and join thousands of satisfied importers worldwide.</p>
            </div>
            <Button variant="default" className="flex-shrink-0">
              Get Export Quote
            </Button>
          </div>
        </Alert>
      </Container>
    </section>
  );
};