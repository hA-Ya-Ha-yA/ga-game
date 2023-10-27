import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import full from "./Full";
import empty from "./Empty";
import AmpanOneLine from "./AmpanOneLine";

type Props = {
  iteration: number;
  bestSolComp: Array<Array<number>>;
};

export default function Sample(props: Props) {
  const { iteration, bestSolComp } = props;
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <div
              className={
                tabIndex === 0
                  ? "border-solid border-green-500 border-b-4"
                  : "opacity-70"
              }
            >
              <div className="font-kosugi">みほんのアンパンマン</div>
            </div>
          </Tab>
          {iteration > 0 && (
            <Tab>
              <div
                className={
                  tabIndex === 1
                    ? "border-solid border-green-500 border-b-4"
                    : "opacity-70"
                }
              >
                <div className="font-kosugi">あなたのつくったアンパンマン</div>
              </div>
            </Tab>
          )}
        </TabList>

        <TabPanel>
          <img
            className="pt-1 px-4"
            width={430}
            height={430}
            src="/AmpanSample.png"
            alt="Ampan"
          />
        </TabPanel>
        {iteration > 0 && (
          <TabPanel>
            {empty.map((numlist, index) => (
              <AmpanOneLine
                key={index}
                empty={empty[index]}
                full={full[index]}
                SolComp={bestSolComp[index]}
              />
            ))}
          </TabPanel>
        )}
      </Tabs>
    </>
  );
}
