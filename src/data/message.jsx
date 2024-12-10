export const Message = [
  {
    sender: "CustomerServiceAgent",
    content: `Received WhatsApp message from <strong>Mobile Number:</strong> <span class='bg-black text-white px-2 py-1 rounded-full'>no. 81234958</span>`,
    time: new Date().toLocaleString(),
    photo: "/OrchestratorAgentAI.png",
  },
  {
    sender: "CustomerService",
    content: `Sending to <strong>Policy Agent</strong> for Further Handling, WhatsApp: <span class='bg-black text-white px-2 py-1 rounded-full'>no. 81234958</span>
    <p class='mt-3'>
             <i>
       Hello, I am a Prudential customer and would
      like some clarification for my accident coverage.
      I have sustained an injury in Singapore. My policy number is
[009282838]
I am currently at NUHS, and I’d like to confirm if my policy covers
for broken arm in a car accident.
Can you let me know if the policy covers, and what I need to do,
Thank you for your assistance!
    </i>
    </p>
    `,
    time: new Date().toLocaleString(),
    icon: "whatsapp",
    photo: "/OrchestratorAgentAI.png",
    imageIcon: "/whatsapp-received.jpg",
  },

  {
    sender: "PolicyAgent",
    content:
      "Retrieve policy by customer information Mobile Number: <strong class='bg-black text-white px-2 py-1 rounded-full'>no. 81234958</strong>",
    time: new Date().toLocaleString(),
    photo: "/PolicyAgentAI.png",
    insuranceData: true,
  },

  {
    sender: "PolicyAgent",
    content: [
      {
        content:
          "1. Checking <strong>if injury_type='broken arm in a car accident'</strong> is covered by policy",
        isChecking: true,
      },
      {
        content:
          "2. OpenAI <strong>Query = Injury Covered </strong>, refer to page 51 click <a href='/modal/detail-policy.jpg' target='_blank' class='link-style' class='link-style'>here</a>",
        isChecking: true,
      },
      {
        content: "3. T&C Pru Shield Document check, <strong>completed</strong>",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/PolicyAgentAI.png",
    imageIcon: "/detail-policy.jpg",
    icon: "policy",
  },

  {
    sender: "CustomerServiceAgent",
    content: `Sending to WhatsApp to client <span class='bg-black text-white px-2 py-1 rounded-full'>no. 81234958</span>
        <p class='mt-3'>
        <i>
        Based on your policy your case is covered,
Please find the link with the required
document and instructions.
Thank you Prudential Customer Service Team
        </i>
        </p>
      `,
    time: new Date().toLocaleString(),
    photo: "/OrchestratorAgentAI.png",
    imageIcon: "/whatsapp-sending.jpg",
    icon: "whatsapp",
  },
  {
    sender: "PolicyAgent",
    content:
      "Creating claim case, with basic of information of policy ID <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span>. Claim Case number <span class='bg-black text-white px-2 py-1 rounded-full'>1-293920-0202</span> for policy ID <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span>",
    time: new Date().toLocaleString(),
    photo: "/PolicyAgentAI.png",
  },
];

export const MessageResponse = [
  {
    sender: "DocumentAgent",
    content: [
      {
        content: "1. Checking customer submitted documents",
        isChecking: true,
      },
      {
        content:
          "2. Document Check <strong>Complete</strong> moving to Data Extraction",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/MarketingAgentAI.png",
  },
  {
    sender: "DocumentAgent",
    content: [
      {
        content: "1. Content processing",
        isChecking: true,
      },
      {
        content:
          "2. Information Extraction and conversion into pre-defined format",
        isChecking: true,
      },
      {
        content: "3. Verifying Data Acuracy",
        isChecking: true,
      },
      {
        content: "4. Checking data consistency",
        isChecking: true,
      },
      {
        content: "5. <strong>Status Success</strong>",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/MarketingAgentAI.png",
  },
  {
    sender: "AdjucationAgent",
    content: [
      {
        content:
          "1. Initiating Claim assessment Proccess for policy ID <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span>",
        isChecking: true,
      },
      {
        content: "2. Check claim history",
        isChecking: true,
      },
      {
        content: "3. Check Readmission Rate",
        isChecking: true,
      },
      {
        content: "4. Assess medical cost by comparing with benchmark",
        isChecking: true,
      },
      {
        content: "5. Rate Normal",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/PaymentAgentAI.png",
  },
  {
    sender: "AdjucationAgent",
    content: [
      {
        content:
          "1. Making decision whether <strong>APPROVED</strong> or <strong>REJECT</strong>",
        isChecking: true,
      },
      {
        content:
          "2. Decision = <span class='bg-[#D6ECFF] rounded-full px-2 py-1 text-[#158CFF]'>APPROVED</span>",
      },
      {
        content:
          "3. Calculating payment amount based on policy <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span>",
        isChecking: true,
      },
      {
        content:
          "4. Payment Amount set to <span class='bg-black text-white px-2 py-1 rounded-full'>400 SGD</span>",
      },
      {
        content: "5. Procceding to Payment",
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/PaymentAgentAI.png",
  },
  {
    sender: "BackendAgent",
    content: [
      {
        content:
          "<p>1. Making payment for Customer ID <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span></p>",
        isChecking: true,
      },
      {
        content:
          "<p class='my-4'>2. Payment successful <span class='bg-black text-white px-2 py-1 rounded-full'>PAY-2239939</span></p>",
      },
      {
        content:
          "<p>3. Updating <span class='bg-[#D6ECFF] rounded-full px-2 py-1 text-[#158CFF]'>MINI_EMR_DB</span></p>",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/AgentAI.png",
  },
  {
    sender: "BackendAgent",
    content: [
      {
        content: "Update <strong>provider database</strong>",
      },
      {
        content: "1. Cost assessment",
        isChecking: true,
      },
      {
        content: "2. Case Condition",
        isChecking: true,
      },
      {
        content: "3. Satisfaction score",
        isChecking: true,
      },
      {
        content: "4.  Readmission Rate",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/AgentAI.png",
  },

  {
    sender: "CustomerServiceAgent",
    content: `Sending <strong>Whatsapp Message</strong>  policy ID : <span class='bg-black text-white px-2 py-1 rounded-full'>009282838</span> Mobile Number: <span class='bg-black text-white px-2 py-1 rounded-full'>no. 81234958</span>
    <p>
    <i>
    Hello, I’m pleased to inform you that your
claim for $400 related to the car accident and broken arm has
been approved and paid to your account. Thank you for choosing Prudential.
</i>
    </p>
    `,
    time: new Date().toLocaleString(),
    icon: "whatsapp",
    imageIcon: "/whatsapp-inform.jpg",
    photo: "/OrchestratorAgentAI.png",
  },
];
