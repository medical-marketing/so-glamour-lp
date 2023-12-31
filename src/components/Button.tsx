import { createClient } from "@/prismicio";
import CTA from "@/components/CTA";
import Iframe from "@/components/Iframe";

export default async function Button({ iframe, className, children }: any) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { cta_background_color, cta_text_color, default_iframe } =
    settings.data;

  return (
    <div className="relative">
      <CTA
        iframe={<Iframe iframe={iframe || default_iframe}></Iframe>}
        className={className}
        style={{
          color: cta_text_color || "rgb(250,255,255)",
          backgroundColor: cta_background_color || "rgb(234,179,8)",
        }}
      >
        {children}
      </CTA>

      {/* <PrismicNextLink
        className={clsx(
          "block w-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 ease-in-out py-4 md:py-6 px-8 md:px-12 font-display font-semibold text-lg md:text-2xl text-center text-white tracking-wide",
          className
        )}
        style={{
          color: cta_text_color || "rgb(250,255,255)",
          backgroundColor: cta_background_color || "rgb(234,179,8)",
        }}
        {...restProps}
      /> */}
    </div>
  );
}
