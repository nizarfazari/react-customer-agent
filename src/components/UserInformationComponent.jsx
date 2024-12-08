import {
  ArrowClockwise,
  CalendarBlank,
  Clock,
  EnvelopeSimple,
  IdentificationCard,
  Phone,
  Trophy,
} from "@phosphor-icons/react";
import { Collapse } from "antd";

const userDetails = {
  policyName: "Direct-PruProTech Life",
  expiryDate: "26 Dec 2024",
  premium: "SGD 1,200",
  renewalLikelihood: "High",
  email: "user@example.com",
  phone: "+65 1234 5678",
  lastInteraction: "5 Dec 2024",
};

const options = { day: "numeric", month: "short", year: "numeric" };

const text = (
  <div className="flex flex-col gap-4 text-[14px]">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <EnvelopeSimple size={20} weight="fill" className="text-gray-600" />
        <p>Email</p>
      </div>
      <p className="font-bold ">user@gmail.com</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <Phone size={20} weight="fill" className="text-gray-600" />
        <p>Phone</p>
      </div>
      <p className="font-bold ">+65 1234 5678</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <Clock weight="fill" size={20} className="text-gray-600" />
        <p>Last Visited</p>
      </div>
      <p className="font-bold ">
        {new Date().toLocaleString("en-GB", options)}
      </p>
    </div>
  </div>
);

const InsuranceMetrix = (
  <div className="flex flex-col gap-4 text-[14px]">
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <IdentificationCard size={20} weight="fill" className="text-gray-600" />
        <p>Policy Name</p>
      </div>
      <p className="font-bold ">{userDetails.policyName}</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <CalendarBlank size={20} weight="fill" className="text-gray-600" />
        <p>Expiry Date</p>
      </div>
      <p className="font-bold ">{userDetails.expiryDate}</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <Trophy weight="fill" size={20} className="text-gray-600" />
        <p>Premium</p>
      </div>
      <p className="font-bold ">{userDetails.premium}</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 font-semibold text-gray-600">
        <ArrowClockwise weight="fill" size={20} className="text-gray-600" />
        <p>Renewal Likelihood</p>
      </div>
      <p className="font-bold ">{userDetails.renewalLikelihood}</p>
    </div>
  </div>
);

const items1 = [
  {
    key: "1",
    label: <span className="font-bold">Insurance Details</span>,
    children: InsuranceMetrix,
  },
];

const items2 = [
  {
    key: "2",
    label: <span className="font-bold">User Information</span>,
    children: text,
  },
];

const UserInformationComponent = () => (
  <div className="w-full mt-6">
    {/* First Collapse */}
    <Collapse
      items={items1}
      size="large"
      className="mb-4"
      bordered={false}
      defaultActiveKey={["1"]}
    />

    {/* Second Collapse */}
    <Collapse
      items={items2}
      size="large"
      bordered={false}
      defaultActiveKey={["2"]}
    />
  </div>
);
export default UserInformationComponent;
