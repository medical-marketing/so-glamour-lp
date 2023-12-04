import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Comparison`.
 */
export type ComparisonProps = SliceComponentProps<Content.ComparisonSlice>;

/**
 * Component for "Comparison" Slices.
 */
const Comparison = ({ slice }: ComparisonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for comparison (variation: {slice.variation}) Slices
    </section>
  );
};

export default Comparison;
