import React from 'react';
import { ReceiptData } from '../types';
import { LOGO_BASE64, getRateForApartment, formatCurrency } from '../constants';

interface ReceiptPreviewProps {
  data: ReceiptData;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ data }) => {
  const calculateFinancials = () => {
    if (!data.startDate || !data.endDate || !data.apartmentName) return null;

    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (nights <= 0) return null;

    const standardRate = getRateForApartment(data.apartmentName, nights);
    
    // Determine effective price and totals
    // If custom rate, user provides the TOTAL lodging amount, not price per night.
    let totalLodging = 0;
    let effectivePricePerNight = 0;

    if (data.isCustomRate) {
      totalLodging = data.customLodgingTotal;
      effectivePricePerNight = totalLodging / nights;
    } else {
      effectivePricePerNight = standardRate.prix;
      totalLodging = nights * effectivePricePerNight;
    }

    const caution = standardRate.caution; 
    const grandTotal = totalLodging + caution;
    const remaining = grandTotal - data.paidAmount;
    
    // Calculate discount displayed only if not custom rate and price is lower than standard
    let reductionPercent = 0;
    if (!data.isCustomRate && effectivePricePerNight < standardRate.prix && standardRate.prix > 0) {
       reductionPercent = ((standardRate.prix - effectivePricePerNight) / standardRate.prix) * 100;
    }

    const lateCheckoutFee = effectivePricePerNight / 2;

    return {
      nights,
      address: standardRate.address,
      effectivePricePerNight,
      standardPricePerNight: standardRate.prix,
      caution,
      totalLodging,
      grandTotal,
      remaining,
      reductionPercent,
      lateCheckoutFee
    };
  };

  const fin = calculateFinancials();
  const receiptNum = `RC-${Date.now().toString().slice(-8)}`;
  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  if (!fin) return <div className="text-center text-gray-500 italic p-8">Veuillez remplir les détails de la réservation pour voir l'aperçu.</div>;

  return (
    <div id="receipt-area" className="relative bg-white p-6 w-full max-w-[210mm] mx-auto text-gray-800 text-sm leading-relaxed shadow-lg print:shadow-none print:w-full print:p-4 print:text-xs">
      
      {/* NO WATERMARK to improve performance */}

      <div className="relative z-10 flex flex-col h-full justify-between min-h-[250mm] print:min-h-0 print:block">
        
        <div>
            {/* Header Reorganized */}
            <div className="flex flex-col items-center border-b-2 border-blue-900 pb-3 mb-4 text-center">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wider mb-1">
                YAMEHOME : REÇU DE PAIEMENT
              </h2>
              
              <p className="text-xs text-gray-600 mb-1">
                Location d'appartements, chambres et studios meublés
              </p>
              
              <p className="text-xs text-gray-600 mb-1">
                +237 656 751 310 | christian@yamehome.com | www.yamehome.com
              </p>
              
              <p className="text-gray-500 text-xs">
                Date d'émission: {today} | N°: {receiptNum}
              </p>
            </div>

            {/* Grid Layout for Info */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Client Info */}
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:border print:border-gray-200">
                <h3 className="font-bold text-blue-800 border-b border-gray-300 pb-1 mb-2 uppercase text-xs">Client</h3>
                <div className="space-y-1">
                  <p><span className="font-semibold">Nom:</span> {data.firstName} {data.lastName}</p>
                  <p><span className="font-semibold">Tél:</span> {data.phone || 'N/A'}</p>
                  <p><span className="font-semibold">Email:</span> {data.email || 'N/A'}</p>
                </div>
              </div>

              {/* Reservation Info */}
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:border print:border-gray-200">
                <h3 className="font-bold text-blue-800 border-b border-gray-300 pb-1 mb-2 uppercase text-xs">Réservation</h3>
                <div className="space-y-1">
                  <p><span className="font-semibold">Logement:</span> {data.apartmentName}</p>
                  <p><span className="font-semibold">Lieu:</span> {fin.address}</p>
                  <p><span className="font-semibold">Séjour:</span> {fin.nights} nuit(s)</p>
                  <p className="text-xs">Du {new Date(data.startDate).toLocaleDateString('fr-FR')} au {new Date(data.endDate).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
            </div>

            {/* Financials Table */}
            <div className="mb-4">
              <h3 className="font-bold text-blue-800 border-b border-gray-300 pb-1 mb-2 uppercase text-xs">Détails Financiers</h3>
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Prix par nuit {data.isCustomRate && <span className="text-xs text-orange-600">(Tarif Plateforme/Custom)</span>}</td>
                    <td className="py-1 text-right font-medium">{formatCurrency(fin.effectivePricePerNight)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Sous-total Séjour</td>
                    <td className="py-1 text-right">{formatCurrency(fin.totalLodging)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Caution (Remboursable)</td>
                    <td className="py-1 text-right">{formatCurrency(fin.caution)}</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold print:bg-gray-100">
                    <td className="py-1 pl-2">Montant Total à Payer</td>
                    <td className="py-1 pr-2 text-right">{formatCurrency(fin.grandTotal)}</td>
                  </tr>
                  <tr>
                    <td className="py-1 pl-2 text-green-700">Montant Reçu ({data.paymentMethod})</td>
                    <td className="py-1 pr-2 text-right font-bold text-green-700">{formatCurrency(data.paidAmount)}</td>
                  </tr>
                  <tr className="border-t-2 border-gray-300">
                    <td className="py-1 pl-2 font-bold text-red-600 uppercase">Reste à Payer</td>
                    <td className="py-1 pr-2 text-right font-bold text-red-600 text-base">{formatCurrency(fin.remaining)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notes & Hosts */}
            <div className="bg-gray-50 p-3 rounded-lg mb-4 text-xs print:bg-transparent print:border print:border-gray-200">
              <h3 className="font-bold text-gray-700 mb-1">Observations & Conditions</h3>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-600">
                <li>Check-in: 15h00 | Check-out: 11h30.</li>
                <li>Départ tardif: pénalité de {formatCurrency(fin.lateCheckoutFee)}.</li>
                {data.electricityCharge && <li><strong>Électricité à la charge du client.</strong></li>}
                {data.packEco && <li><strong>Pack ECO appliqué.</strong></li>}
                {data.observations && <li><em>Note: {data.observations}</em></li>}
              </ul>
              
              {data.hosts.length > 0 && (
                <div className="mt-2 pt-1 border-t border-gray-200">
                  <span className="font-semibold">Vos hôtes sur place : </span>
                  {data.hosts.join(', ')}
                </div>
              )}
            </div>
        </div>

        {/* Footer Section */}
        <div className="mt-auto px-4 pb-4 pt-6">
            {/* Signature Area Container - Aligned Right */}
            <div className="flex justify-end items-end gap-4 mb-4">
                {/* The Logo requested next to signature */}
                 <img src={LOGO_BASE64} alt="Logo" className="h-14 opacity-80" />

                 {/* Signature Block */}
                 <div className="text-center w-48">
                      {/* Dynamic Signature Name */}
                      <div className="h-12 flex items-end justify-center mb-1">
                          {data.signature ? (
                              <p className="font-serif italic text-xl text-blue-900 font-bold whitespace-nowrap">{data.signature}</p>
                          ) : (
                              <span className="opacity-0">.</span>
                          )}
                      </div>
                      {/* Static Label */}
                      <div className="border-t border-gray-400 pt-1">
                          <p className="text-[10px] font-bold uppercase text-gray-600">Signature Gérant / YameHome</p>
                      </div>
                 </div>
            </div>

            {/* Bottom Centered Text (Restored position) */}
            <div className="text-center">
                <p className="text-[10px] text-gray-400 italic">Merci pour votre confiance !</p>
                <div className="text-[8px] text-gray-300 print:hidden mt-1">
                  Généré par YameHome App v2.0
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;