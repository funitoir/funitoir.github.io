
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                  <span className={title()}>
            سایت فروش
          </span>
        <div className="inline-block max-w-lg text-center justify-center">
          
          <span className={title({ color: "violet" })}>شهرام&nbsp;</span>
          <br />

          <div className={subtitle({ class: "mt-4" })}>
            این سایت برای فروش شهرام میباشد
          </div>
        </div>

        <div className="flex gap-3">
          <Link

            
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              
            })} to={"./pricing"}            
          >
            فروشگاه
          </Link>


        </div>


      </section>
    </DefaultLayout>
  );
}
