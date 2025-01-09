export const contactInfo = [
  {
    icon: "/icons/mail.svg",
    title: "Email Address",
    info: "info@symliq.com",
    link: "mailto:info@symliq.com" 
  },
  {
    icon: "/icons/phone.svg",
    title: "Phone Number",
    info: "+233 24 857 4526",
    infoTwo: "+233 54 805 0137",
    link: (phone) => `tel:${phone}`  
  },
  {
    icon: "/icons/map-pin.svg",
    title: "Our Address",
    info: "Nii Okaiman West.",
    infoTwo: "Silver St, GA-462-6116",
    link: (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` // Google Maps link
  },
] 

export const generalInfo = {
  companyName: "Symliq", 
  email: "info@symliq.com",
  emailLink: "mailto:info@symliq.com" ,
  phoneLineOneLink: "tel:+233248574526",
  phoneLineTwoLink: "tel:+233548050137",
  phoneLineOne: "+233 24 857 4526",
  phoneLineTwo: "+233 54 805 0137",

  phoneLink: (phone) => `tel:${phone}`,
  address: {
    street: "Silver St",
    area: "Nii Okaiman West",
    postalCode: "GA-462-6116",
    country: "Ghana",
    addressLink: (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  },
  socialMedia: { }
}