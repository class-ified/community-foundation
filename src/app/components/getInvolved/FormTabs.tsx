'use client';

import cn from "classnames";
import { useRef, useState } from "react";

import DonateNowForm from "./DonateNowForm";
import VolunteerForm from "./VolunteerForm";

const tabs = ['donate', 'volunteer'] as const;

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabPanelRefs = useRef<Array<HTMLDivElement | null>>(
    new Array(tabs.length).fill(null)
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>(
    new Array(tabs.length).fill(null)
  );

  const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
    let newIndex = index;
    if (event.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Donation and Volunteer Forms"
        className="bg-cyan-light flex p-1 rounded-lg overflow-hidden w-max mb-7"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`${tab}-tab`}
            id={tab}
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            tabIndex={activeTab === index ? 0 : -1}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={cn(
              ' text-black py-4 px-[1.125rem] rounded-lg capitalize text-xl',
              {
                'font-medium bg-white shadow-md': activeTab === index,
                'font-normal': activeTab !== index,
              }
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`${tab}-tab`}
          aria-labelledby={`${tab} form`}
          tabIndex={-1}
          ref={(el) => {
            tabPanelRefs.current[index] = el;
          }}
          hidden={activeTab !== index}
          className="shadow-md bg-white rounded-[10px] p-8"
        >
          {tab === 'donate' ? <DonateNowForm /> : <VolunteerForm />}
        </div>
      ))}
    </div>
  );
};

export default FormTabs;
