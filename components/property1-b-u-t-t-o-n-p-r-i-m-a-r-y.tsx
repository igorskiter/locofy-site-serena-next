import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type Property1BUTTONPRIMARYType = {
  doctorSpecialty?: string;

  /** Style props */
  property1BUTTONPRIMARYBoxSizing?: CSSProperties["boxSizing"];
  property1BUTTONPRIMARYPadding?: CSSProperties["padding"];
  property1BUTTONPRIMARYCursor?: CSSProperties["cursor"];
  property1BUTTONPRIMARYFlexShrink?: CSSProperties["flexShrink"];
  cTATEXTFontSize?: CSSProperties["fontSize"];
  cTATEXTDisplay?: CSSProperties["display"];
};

const Property1BUTTONPRIMARY: NextPage<Property1BUTTONPRIMARYType> = memo(
  ({
    doctorSpecialty,
    property1BUTTONPRIMARYBoxSizing,
    property1BUTTONPRIMARYPadding,
    property1BUTTONPRIMARYCursor,
    property1BUTTONPRIMARYFlexShrink,
    cTATEXTFontSize,
    cTATEXTDisplay,
  }) => {
    const property1BUTTONPRIMARYStyle: CSSProperties = useMemo(() => {
      return {
        boxSizing: property1BUTTONPRIMARYBoxSizing,
        padding: property1BUTTONPRIMARYPadding,
        cursor: property1BUTTONPRIMARYCursor,
        flexShrink: property1BUTTONPRIMARYFlexShrink,
      };
    }, [
      property1BUTTONPRIMARYBoxSizing,
      property1BUTTONPRIMARYPadding,
      property1BUTTONPRIMARYCursor,
      property1BUTTONPRIMARYFlexShrink,
    ]);

    const cTATEXTStyle: CSSProperties = useMemo(() => {
      return {
        fontSize: cTATEXTFontSize,
        display: cTATEXTDisplay,
      };
    }, [cTATEXTFontSize, cTATEXTDisplay]);

    return (
      <div
        className="rounded-xl bg-darkslategray flex flex-row items-center justify-center py-[21px] px-[54px] text-center text-lg text-white-prime font-plus-jakarta-sans border-[2px] border-solid border-white-prime"
        style={property1BUTTONPRIMARYStyle}
      >
        <b
          className="relative tracking-[0.14em] leading-[130%] uppercase"
          style={cTATEXTStyle}
        >
          {doctorSpecialty}
        </b>
      </div>
    );
  }
);

export default Property1BUTTONPRIMARY;
