import Image from "next/image";
import { Offering } from "@/types/offering";
import DigitalDeliveryExtras from "./DigitalDeliveryExtras";

interface Props {
  offering: Offering;
}

export default function OfferingSection({
  offering,
}: Props) {
  return (
    <section
      id={offering.slug}
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            {offering.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            {offering.shortDescription}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">

          {offering.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="space-y-8"
            >

              {/* Section Heading */}
              {section.heading && (
                <h3 className="mb-2 text-3xl font-bold text-slate-900">
                  {section.heading}
                </h3>
              )}

              {/* Text-only Section */}
              {(!section.images || section.images.length === 0) && (
                <div>
                  {section.paragraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="mb-5 text-lg leading-relaxed text-slate-600"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {section.bulletPoints &&
                    section.bulletPoints.length > 0 && (
                      <ul className="space-y-3">
                        {section.bulletPoints.map(
                          (point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-2 h-2 w-2 rounded-full bg-[#4a9eb3]" />

                              <span className="text-slate-700">
                                {point}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              )}

              {/* Image Sections */}
              {section.images?.map((image, imageIndex) => {
                const hasImage = Boolean(image.imageUrl);

                return (
                  <div
                    key={imageIndex}
                    className={
                      hasImage
                        ? `
                            grid items-center gap-10 lg:grid-cols-2
                            ${
                              image.layout === "image-right"
                                ? "lg:[&>*:first-child]:order-2"
                                : ""
                            }
                          `
                        : ""
                    }
                  >
                    {/* Image */}
                    {image.imageUrl && (
                      <div className="mx-auto w-full max-w-sm">
                        <div
                          className="
                            relative
                            h-[180px]
                            md:h-[220px]
                            lg:h-[260px]
                            overflow-hidden
                            rounded-2xl
                          "
                        >
                          <Image
                            src={image.imageUrl}
                            alt={section.heading}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Text */}
                    <div>
                      {section.paragraphs?.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="mb-5 text-lg leading-relaxed text-slate-600"
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                      {section.bulletPoints &&
                        section.bulletPoints.length > 0 && (
                          <ul className="space-y-3">
                            {section.bulletPoints.map(
                              (point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-2 h-2 w-2 rounded-full bg-[#4a9eb3]" />

                                  <span className="text-slate-700">
                                    {point}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  </div>
                );
              })}

            </div>
          ))}

        </div>

{offering.slug === "digital-delivery" && (
  <DigitalDeliveryExtras />
)}

        {/* Features */}
        {offering.features.length > 0 && (
          <div className="mt-24">
            <h3 className="mb-8 text-3xl font-bold">
              Key Capabilities
            </h3>

            <ul className="grid gap-4 md:grid-cols-2">
              {offering.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-[#4a9eb3]" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}