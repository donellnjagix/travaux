"use client";

import { Cog6ToothIcon, WrenchScrewdriverIcon, CheckBadgeIcon, LightBulbIcon, HomeModernIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";

type Props = {};

const Services = (props: Props) => {
  return (
    <div id="services" className="mx-auto w-5/6 my-8 pb-8">
      <div className="background_img rounded-md p-8 text-accent-white">
      <div className="flex flex-col items-center text-center pb-12">
          <h1 className="text-3xl font-bold mr-4">Our Services</h1>
          <p className="underline underline-offset-8">We provide exceptional customer service to ensure customer satisfaction.</p>
        </div>
        <div className="services md:flex items-center justify-between">
          {/* Service 1 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <Cog6ToothIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                  Pre-Construction Services
                </h2>
                <p className="font-bold">
                  Services we offer under the pre-construction stage are:
                </p>
                <ul className="list-disc">
                  <li>Feasibility Studies</li>
                  <li>Site Analysis and Selection</li>
                  <li>Cost Estimation</li>
                  <li>Value Engineering</li>
                  <li>Permitting and Regulatory Compliance</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <WrenchScrewdriverIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                Building Services
                </h2>
                <p className="font-bold">
                Building Services we offer are:
                </p>
                <ul className="list-disc">
                  <li>General Contracting</li>
                  <li>Construction Management</li>
                  <li>Design-Build</li>
                  <li>Project Scheduling and Control</li>
                  <li>Quality Assurance and Quality Control</li>
                  <li>Safety Management</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <CheckBadgeIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                Civil and Road Works
                </h2>
                <p className="font-bold">
                Civil and Road works Services we offer are:
                </p>
                <ul className="list-disc">
                  <li>Site Preparation and Earthworks</li>
                  <li>Road Construction</li>
                  <li>Drainage Systems</li>
                  <li>Utility Infrastructure</li>
                  <li>Retaining Walls</li>
                  <li>Safety Management</li>
                </ul>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
        {/* Additional services */}
        <div className="flex flex-col items-center text-center pt-4">
          <h1 className="text-3xl font-bold mr-4 underline underline-offset-8">Additional Services</h1>
          </div>
          {/* Services */}
          <div className="services md:flex items-center justify-between pt-4">
          {/* Service 1 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <HomeModernIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                Interior Works
                </h2>
                <p className="font-bold">
                  Services we offer under the interior works are:
                </p>
                <ul className="list-disc">
                  <li>Interior Design and Space Planning</li>
                  <li>Partitioning and Drywall Installation</li>
                  <li>Flooring and Tiling</li>
                  <li>Cabinetry and Joinery fittings</li>
                  <li>Painting and Finishing</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <LightBulbIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                Mechanical, Electrical and Plumbing.(MEP)
                </h2>
                <p className="font-bold">
                Services we offer under the MEP services are:
                </p>
                <ul className="list-disc">
                  <li>Electrical Systems</li>
                  <li>Plumbing and Sanitary Systems</li>
                  <li>Fire Protection Systems</li>
                  <li>Energy Efficiency Solutions</li>
                  <li>Energy Efficiency Solutions</li>
                  <li>HVAC Systems</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="service flex flex-col gap-1  justify-center">
            <div className="flex gap-3">
              <BuildingStorefrontIcon className="h-12 w-12 text-accent-orange" />
              <div>
                <h2 className="service-header font-extrabold text-2xl text-accent-orange">
                Exterior Works
                </h2>
                <p className="font-bold">
                Services we offer under the Exterior works are:
                </p>
                <ul className="list-disc">
                  <li>Roofing Systems</li>
                  <li>Landscaping and Site Development</li>
                  <li>Exterior Lighting</li>
                  <li>Fencing and Boundary Walls</li>
                </ul>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
          {/* End */}
        
      </div>
    </div>
  );
};

export default Services;
