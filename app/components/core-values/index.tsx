"use client";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const CoreValues = (props: Props) => {
  return (
    <div className="mx-auto w-5/6 pb-8">
      <div className="bg-accent-black text-accent-white p-4 rounded-md">
        {/* title */}
        <div className="flex flex-col items-center pb-8">
          <h1 className="text-3xl font-bold underline underline-offset-8">
            Core Values
          </h1>
        </div>
        {/* core values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* core-value 1 */}
          <div className="flex items-start justify-center gap-2">
            {/* icon */}
            <div>
              <AcademicCapIcon className="h-12 w-12 text-accent-orange" />
            </div>
            {/* content */}
            <div>
              <h1 className="font-extrabold text-2xl text-accent-orange">
                Excellence
              </h1>
              <p>
                We strive for excellence in all aspects of our work, from
                project planning and execution to customer service. We
                continuously seek innovative solutions and maintain high
                standards of quality to exceed client expectations.
              </p>
            </div>
          </div>
          {/* Core value 2 */}
          <div className="flex items-start justify-center gap-2">
            {/* icon */}
            <div>
              <LightBulbIcon className="h-12 w-12 text-accent-orange" />
            </div>
            {/* content */}
            <div>
              <h1 className="font-extrabold text-2xl text-accent-orange">
                Integrity
              </h1>
              <p>
                We conduct our business with integrity, honesty, and
                transparency. We believe in building long-term relationships
                based on trust, and we uphold ethical practices in all our
                interactions.
              </p>
            </div>
          </div>
          {/* core-value 3 */}
          <div className="flex items-start justify-center gap-2">
            {/* icon */}
            <div>
              <UserGroupIcon className="h-12 w-12 text-accent-orange" />
            </div>
            {/* content */}
            <div>
              <h1 className="font-extrabold text-2xl text-accent-orange">
                Collaboration
              </h1>
              <p>
                We value teamwork and collaboration, both internally and with
                our clients and partners. By fostering a collaborative
                environment, we encourage the exchange of ideas, knowledge
                sharing, and collective problem-solving.
              </p>
            </div>
          </div>

          {/* core-value-4 */}
          <div className="flex items-start justify-center gap-2">
            {/* icon */}
            <div>
              <ShieldCheckIcon className="h-12 w-12 text-accent-orange" />
            </div>
            {/* content */}
            <div>
              <h1 className="font-extrabold text-2xl text-accent-orange">
                Safety
              </h1>
              <p>
                The safety of our employees, subcontractors, and the general
                public is of utmost importance to us. We prioritize a safe work
                environment and adhere to strict safety protocols to prevent
                accidents and injuries.
              </p>
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default CoreValues;
