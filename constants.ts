import { TarifMap, PricingRule } from './types';

// Replace this with your actual Logo Base64 string
export const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7Z2/TsMwEMZtEqvKxMIzAA8Qw8IJE29B4gVIjAydmHgDHgA8ADwDEysLCCtV/d05X9rYSe24SdvP90tW3T93vuT47LhJk8oY44wz5Rbj/B8fL5+X76/P5/On5/P5/eXz8vl0/XQ4Y0zZ5bQ9P91+3F9+3d98P91+3E8/H84YU3Y5bQ+X+8/hcv/5+ulwxpiyy2n7/3Q4Y0zZ5bT99/PhjDFlF0IgEA4hEAiHEAiEQwgEwiEEAuEQAoFwCIFAToSw1q7W2tVau3b74YwxZRdCIBwOIRCOh0A4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA4hEA45B8fL5+X76/P5/On5/P5/eXz8vl0/XQ4Y0zZ5bQ9P91+3F9+3d98P91+3E8/H84YU3Y5bQ+X+8/hcv/5+ulwxpiyy2n7/3Q4Y0zZ5bT99/PhjDFlF0IgEA4hEMgJ5h9j01oX/8E7OAAAAABJRU5ErkJggg==";

export const TARIFS: TarifMap = {
  'RIETI YAMEHOME - APPARTEMENT TERRACOTTA mode STUDIO': { 
      address: 'Odza entrée Fécafoot Yaoundé, Porte 201',
      '1-6': { prix: 25000, caution: 10000 }, 
      '7+': { prix: 23000, caution: 15000 }
  },
  'RIETI YAMEHOME - APPARTEMENT EMERAUDE mode STUDIO': { 
      address: 'Odza entrée Fécafoot Yaoundé, Porte 202',
      '1-6': { prix: 25000, caution: 10000 }, 
      '7+': { prix: 23000, caution: 15000 }
  },
  'MODENA YAMEHOME - APPARTEMENT HAUT STANDING mode STUDIO': { 
      address: 'Odza Brigade, Yaoundé',
      '1-6': { prix: 27000, caution: 10000 }, 
      '7+': { prix: 24000, caution: 15000 }
  },
  'MATERA YAMEHOME - APPARTEMENT DELUXE mode STUDIO': { 
      address: 'Odza borne 10, entrée Ministre Yaoundé, Porte 201',
      '1-6': { prix: 30000, caution: 10000 }, 
      '7+': { prix: 25000, caution: 15000 }
  },
  'MATERA YAMEHOME - STUDIO AMERICAIN': {
      address: 'Odza borne 10, entrée Ministre Yaoundé, Porte 103|203',
      '1-6': { prix: 25000, caution: 5000 }, 
      '7-29': { prix: 22500, caution: 10000 }, 
      '30+': { prix: 20000, caution: 15000 }
  },
  'MATERA YAMEHOME - CHAMBRE STANDARD': {
      address: 'Odza borne 10, entrée Ministre Yaoundé,Porte 104 A|B',
      '1-2': { prix: 15000, caution: 5000 }, 
      '3+': { prix: 13000, caution: 10000 }
  },
  // Les adresses complètes sont ajoutées ici pour la recherche dans l'objet
  'RIETI YAMEHOME - APPARTEMENT TERRACOTTA': { 
      address: 'Odza entrée Fécafoot Yaoundé, Porte 201',
      '1-6': { prix: 32000, caution: 10000 }, 
      '7-29': { prix: 30000, caution: 15000 }, 
      '30+': { prix: 26000, caution: 30000 }
  },
  'RIETI YAMEHOME - APPARTEMENT EMERAUDE': {
      address: 'Odza entrée Fécafoot Yaoundé, Porte 202',
      '1-6': { prix: 32000, caution: 10000 }, 
      '7-29': { prix: 30000, caution: 15000 }, 
      '30+': { prix: 26000, caution: 30000 }
  },
  'MODENA YAMEHOME - APPARTEMENT HAUT STANDING': {
      address: 'Odza Brigade, Yaoundé',
      '1-6': { prix: 35000, caution: 10000 }, 
      '7-29': { prix: 30000, caution: 15000 }, 
      '30+': { prix: 27000, caution: 30000 }
  },
  'MATERA YAMEHOME - APPARTEMENT DELUXE': {
      address: 'Odza borne 10, entrée Ministre Yaoundé, Porte 201',
      '1-6': { prix: 40000, caution: 10000 }, 
      '7-29': { prix: 34000, caution: 15000 }, 
      '30+': { prix: 30000, caution: 30000 }
  }
};

export const PAYMENT_METHODS = ["Espèces", "Paiement mobile", "Virement bancaire", "PayPal", "Autre"];

export const HOSTS = [
  { id: "paola", label: "Paola (+237 691 47 24 82)" },
  { id: "edwige", label: "Edwige (+237 656 75 13 10)" },
  { id: "idriss", label: "Idriss (+237 651 16 37 50)" }
];

export const getRateForApartment = (apartmentName: string, nights: number): { prix: number, caution: number, address: string } => {
  const apt = TARIFS[apartmentName];
  if (!apt) return { prix: 0, caution: 0, address: '' };

  let rule: PricingRule | undefined;

  if (apartmentName.includes('CHAMBRE STANDARD')) {
      rule = nights >= 3 ? apt['3+'] : apt['1-2'];
  } else if (apartmentName.includes('mode STUDIO')) {
      rule = nights >= 7 ? apt['7+'] : apt['1-6'];
  } else if (apartmentName.includes('STUDIO AMERICAIN')) {
      if (nights >= 30) rule = apt['30+'];
      else if (nights >= 7) rule = apt['7-29'];
      else rule = apt['1-6'];
  } else {
      // Default logic for full apartments
      if (nights >= 30) rule = apt['30+'];
      else if (nights >= 7) rule = apt['7-29'];
      else rule = apt['1-6'];
  }

  // Fallback if rule is undefined (shouldn't happen with correct data)
  if (!rule) rule = { prix: 0, caution: 0 };

  return { prix: rule.prix, caution: rule.caution, address: apt.address };
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('fr-FR', { style: 'currency', currency: 'XAF', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};