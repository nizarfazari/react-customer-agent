export const Message = [
    {
      sender: "OrchestratorAgent",
      content:
        "Policy for Customer <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong> to expire matches threshold (<2 weeks).",
      time: new Date().toLocaleString(),
      photo: "/public/OrchestratorAgentAI.png",
      button: true,
    },
    {
      sender: "OrchestratorAgent",
      content:
        "Invoking <strong>PolicyAgent</strong> to retrieve details for Customer ID: <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong>.",
      time: new Date().toLocaleString(),
      photo: "/public/OrchestratorAgentAI.png",
      button: true,
    },
    {
      sender: "PolicyAgent",
      content: "Policy number <strong class='bg-black text-white px-2 py-1 rounded-full'>00299292</strong> for customer <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong> has been retrieved. Details as follows:",
      time: new Date().toLocaleString(),
      photo: "/public/PolicyAgentAI.png",
      icon: "policy",
      button: true,
      insuranceData: true
    },
    {
      sender: "PolicyAgent",
      content:
        "Policy: <strong>Direct-PruShield Life</strong> | Expiry: <span class='bg-black text-white px-2 py-1 rounded-full'>26 Dec 2024</span> | Premium: SGD <span class='bg-black text-white px-2 py-1 rounded-full'> $1,200 </span>",
      time: new Date().toLocaleString(),
      photo: "/public/PolicyAgentAI.png",
      icon: "policy",
      button: true,
    },
    {
      sender: "OrchestratorAgent",
      content:
        "Sending to <strong>Customer Service Agent</strong> to Prepare messages for Customer",
      time: new Date().toLocaleString(),
      photo: "/public/OrchestratorAgentAI.png",
      button: true,
    },
    {
      sender: "CustomerService",
      content:
        "Generated WhatsApp: 'Hi Mr. Kastanis, your policy is expiring on <span class='bg-black text-white px-2 py-1 rounded-full'>26 Dec 2024</span>. Renew now?'",
      time: new Date().toLocaleString(),
      photo: "/public/MarketingAgentAI.png",
      icon: "whatsapp",
    },
    {
      sender: "CustomerService",
      content:
        "Generated Email: '<strong>Subject:</strong> Renew Your Policy | <strong>Body:</strong> Dear Mr. Kastanis, your policy expires on <span class='bg-black text-white px-2 py-1 rounded-full'>26 Dec 2024</span> . Click <span class='link-style'>here</span> to renew.'",
      time: new Date().toLocaleString(),
      type: "user",
      photo: "/public/MarketingAgentAI.png",
      icon: "email",
    },
  ];


  export  const MessageResponse = [
    {
      sender: "OrchestratorAgent",
      content:
        "Received Approval from customer <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong> for policy renewal. Invoking <strong>PolicyAgent</strong>",
      photo: "/public/PaymentAgentAI.png",
      time: new Date().toLocaleString(),
    },
    {
      sender: "PaymentAgent",
      content:
        "Issuing payment amount SGD <span class='bg-black text-white px-2 py-1 rounded-full'>$1,200</span> through PayNow Account to customer <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong>, for policy <strong class='bg-black text-white px-2 py-1 rounded-full'>00299292</strong>",
      photo: "/public/PaymentAgentAI.png",
      time: new Date().toLocaleString(),
    },
    {
      sender: "PaymentAgent",
      content:
        "Payment success Confirmation number <strong class='bg-black text-white px-2 py-1 rounded-full'>PAY-2933939</strong>",
      photo: "/public/PaymentAgentAI.png",
      time: new Date().toLocaleString(),
    },
    {
      sender: "Orchestrator",
      content:
        "Invoking <strong>PolicyAgent</strong> to update record <strong class='bg-black text-white px-2 py-1 rounded-full'>00299292</strong>",
      photo: "/public/PaymentAgentAI.png",
      time: new Date().toLocaleString(),
    },
    {
      sender: "PolicyAgent",
      content:
        "Successfully Update policy <strong class='bg-black text-white px-2 py-1 rounded-full'>00299292</strong> with new expiry date <span class='bg-black text-white px-2 py-1 rounded-full'>26 Dec 2024</span> for customer <strong class='bg-black text-white px-2 py-1 rounded-full'>2304992</strong>",
      photo: "/public/PaymentAgentAI.png",
      time: new Date().toLocaleString(),
    },
  ];
