"use client";

import { useState } from "react";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const PRESET_AMOUNTS = [5, 10, 25, 50];
const RECIPIENT_ADDRESS = "0x9c7218a253d1565fc5f2149ba51f0f55f0f27f07" as const;

export function DonationApp() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePaymentCompleted = () => {
    setShowThankYou(true);
    setSelectedAmount(null);
    // Auto-hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  if (showThankYou) {
    return (
      <div className="w-full max-w-md mx-auto p-6 space-y-6">
        <Card className="text-center border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-green-600 text-2xl font-semibold mb-2">
              Thank You!
            </div>
            <p className="text-green-700">
              Your donation has been sent successfully. Thank you for your support!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Support with USDC
          </CardTitle>
          <p className="text-muted-foreground">
            Choose an amount to donate
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Preset Amount Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {PRESET_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                size="lg"
                className="h-16 text-lg font-semibold"
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount} USDC
              </Button>
            ))}
          </div>

          {/* Recipient Address Display */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Recipient:</p>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm font-mono break-all">
                {RECIPIENT_ADDRESS}
              </p>
            </div>
          </div>

          {/* Donation Button */}
          {selectedAmount && (
            <div className="pt-4">
              <DaimoPayTransferButton
                text={`Donate $${selectedAmount} USDC`}
                toAddress={RECIPIENT_ADDRESS}
                amount={selectedAmount.toString()}
                onPaymentCompleted={handlePaymentCompleted}
              />
            </div>
          )}

          {!selectedAmount && (
            <div className="pt-4">
              <Button 
                disabled 
                size="lg" 
                className="w-full"
              >
                Select an amount to continue
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Project Reference Link */}
      <Card className="border-muted">
        <CardContent className="pt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Learn more about this project
          </p>
          <a 
            href="https://www.pasosdejesus.org/lensenia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
          >
            Visit Project Website
          </a>
        </CardContent>
      </Card>
    </div>
  );
}