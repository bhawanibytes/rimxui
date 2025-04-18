import {
  AppearanceProps,
  ArbitraryValue,
  BoxProps,
  FlexProps,
  GridProps,
  SizeProps,
  SpacingProps,
  SpacingValue,
} from "@types";

const SPACING_VALUES_MAPPING: Record<string, string> = {
  "0.5": "0.5",
  "1": "1",
  "1.5": "1.5",
  "2": "2",
  "2.5": "2.5",
  "3": "3",
  "3.5": "3.5",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
  "11": "11",
  "12": "12",
  "14": "14",
  "16": "16",
  "20": "20",
  "24": "24",
  "28": "28",
  "32": "32",
  "36": "36",
  "40": "40",
  "44": "44",
  "48": "48",
  "52": "52",
  "56": "56",
  "60": "60",
  "64": "64",
  "72": "72",
  "80": "80",
  "96": "96",
};

const getSpacingClass = (value: ArbitraryValue<SpacingValue>): string => {
  if (value === "0") return "0";
  if (value === "full") return "full";
  if (value === "auto") return "auto";
  if (value === "px") return "px";

  // Handle arbitrary values with bracket syntax
  if (
    typeof value === "string" &&
    value.startsWith("[") &&
    value.endsWith("]")
  ) {
    return value;
  }

  return SPACING_VALUES_MAPPING[value] ?? value;
};

const colorVariantClasses: Record<string, Record<string, string>> = {
  bg: {
    primary: "bg-primary-500",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    white: "bg-white",
    black: "bg-black",
    transparent: "bg-transparent",
  },
  color: {
    primary: "text-primary-500",
    secondary: "text-gray-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
    info: "text-blue-500",
    white: "text-white",
    black: "text-black",
    transparent: "text-transparent",
  },
  borderColor: {
    primary: "border-primary-500",
    secondary: "border-gray-500",
    success: "border-green-500",
    warning: "border-yellow-500",
    error: "border-red-500",
    info: "border-blue-500",
    white: "border-white",
    black: "border-black",
    transparent: "border-transparent",
  },
};

export const getSpacingClasses = (props: SpacingProps): string => {
  const classes: string[] = [];

  // Helper function for handling spacing properties with arbitrary values
  const addSpacingClass = (
    prefix: string,
    value: ArbitraryValue<SpacingValue> | undefined,
  ) => {
    if (!value) return;

    if (
      typeof value === "string" &&
      value.startsWith("[") &&
      value.endsWith("]")
    ) {
      classes.push(`${prefix}-${value}`);
    } else {
      classes.push(`${prefix}-${getSpacingClass(value)}`);
    }
  };

  // Margins
  addSpacingClass("m", props.m);
  addSpacingClass("mx", props.mx);
  addSpacingClass("my", props.my);
  addSpacingClass("mt", props.mt);
  addSpacingClass("mb", props.mb);
  addSpacingClass("ml", props.ml);
  addSpacingClass("mr", props.mr);

  // Paddings
  addSpacingClass("p", props.p);
  addSpacingClass("px", props.px);
  addSpacingClass("py", props.py);
  addSpacingClass("pt", props.pt);
  addSpacingClass("pb", props.pb);
  addSpacingClass("pl", props.pl);
  addSpacingClass("pr", props.pr);

  return classes.join(" ");
};

export const getAppearanceClasses = (props: AppearanceProps): string => {
  const classes: string[] = [];

  if (props.bg) {
    if (props.bg in colorVariantClasses.bg) {
      classes.push(colorVariantClasses.bg[props.bg]);
    }
  }

  if (props.color) {
    if (props.color in colorVariantClasses.color) {
      classes.push(colorVariantClasses.color[props.color]);
    }
  }

  if (props.border) {
    classes.push(`border-${props.border}`);
  }

  if (props.borderColor) {
    if (props.borderColor in colorVariantClasses.borderColor) {
      classes.push(colorVariantClasses.borderColor[props.borderColor]);
    }
  }

  if (props.shadow) {
    classes.push(
      props.shadow === "none" ? "shadow-none" : `shadow-${props.shadow}`,
    );
  }

  if (props.rounded) {
    classes.push(
      props.rounded === "none" ? "rounded-none" : `rounded-${props.rounded}`,
    );
  }

  return classes.join(" ");
};

export const getSizeClasses = (props: SizeProps): string => {
  const classes: string[] = [];

  if (props.width) {
    // Special handling for arbitrary values
    if (
      typeof props.width === "string" &&
      props.width.startsWith("[") &&
      props.width.endsWith("]")
    ) {
      classes.push(`w-${props.width}`);
    } else {
      classes.push(`w-${getSpacingClass(props.width)}`);
    }
  }

  if (props.height) {
    // Special handling for arbitrary values
    if (
      typeof props.height === "string" &&
      props.height.startsWith("[") &&
      props.height.endsWith("]")
    ) {
      classes.push(`h-${props.height}`);
    } else {
      classes.push(`h-${getSpacingClass(props.height)}`);
    }
  }

  if (props.minW) {
    // Special handling for arbitrary values
    if (
      typeof props.minW === "string" &&
      props.minW.startsWith("[") &&
      props.minW.endsWith("]")
    ) {
      classes.push(`min-w-${props.minW}`);
    } else {
      classes.push(`min-w-${getSpacingClass(props.minW)}`);
    }
  }

  if (props.maxW) {
    // Special handling for arbitrary values
    if (
      typeof props.maxW === "string" &&
      props.maxW.startsWith("[") &&
      props.maxW.endsWith("]")
    ) {
      classes.push(`max-w-${props.maxW}`);
    } else {
      classes.push(`max-w-${getSpacingClass(props.maxW)}`);
    }
  }

  if (props.minH) {
    // Special handling for arbitrary values
    if (
      typeof props.minH === "string" &&
      props.minH.startsWith("[") &&
      props.minH.endsWith("]")
    ) {
      classes.push(`min-h-${props.minH}`);
    } else {
      classes.push(`min-h-${getSpacingClass(props.minH)}`);
    }
  }

  if (props.maxH) {
    // Special handling for arbitrary values
    if (
      typeof props.maxH === "string" &&
      props.maxH.startsWith("[") &&
      props.maxH.endsWith("]")
    ) {
      classes.push(`max-h-${props.maxH}`);
    } else {
      classes.push(`max-h-${getSpacingClass(props.maxH)}`);
    }
  }

  return classes.join(" ");
};

export const getCustomColorStyles = (
  props: AppearanceProps,
): Record<string, string> => {
  const styles: Record<string, string> = {};

  if (props.bg && !(props.bg in colorVariantClasses.bg)) {
    styles.backgroundColor = props.bg;
  }

  if (props.color && !(props.color in colorVariantClasses.color)) {
    styles.color = props.color;
  }

  if (
    props.borderColor &&
    !(props.borderColor in colorVariantClasses.borderColor)
  ) {
    styles.borderColor = props.borderColor;
  }

  return styles;
};

export const getBoxClasses = (props: BoxProps): string => {
  const classes: string[] = [];

  if (props.position) classes.push(props.position);
  if (props.display)
    classes.push(props.display === "hidden" ? "hidden" : `${props.display}`);

  // Handle overflow properties
  if (props.overflow) classes.push(`overflow-${props.overflow}`);
  if (props.overflowX) classes.push(`overflow-x-${props.overflowX}`);
  if (props.overflowY) classes.push(`overflow-y-${props.overflowY}`);

  return classes.join(" ");
};

export const getFlexClasses = (props: FlexProps): string => {
  const classes: string[] = [];

  classes.push("flex");

  if (props.direction) {
    if (props.direction.startsWith("row")) {
      classes.push(
        props.direction === "row-reverse" ? "flex-row-reverse" : "flex-row",
      );
    } else {
      classes.push(
        props.direction === "col-reverse" ? "flex-col-reverse" : "flex-col",
      );
    }
  }

  if (props.wrap) {
    classes.push(
      props.wrap === "nowrap" ? "flex-nowrap" : `flex-${props.wrap}`,
    );
  }

  if (props.align) {
    classes.push(`items-${props.align}`);
  }

  if (props.justify) {
    classes.push(`justify-${props.justify}`);
  }

  if (props.gap) {
    if (
      typeof props.gap === "string" &&
      props.gap.startsWith("[") &&
      props.gap.endsWith("]")
    ) {
      classes.push(`gap-${props.gap}`);
    } else {
      classes.push(`gap-${getSpacingClass(props.gap)}`);
    }
  }

  if (props.grow) {
    // Handle arbitrary grow values
    if (
      typeof props.grow === "string" &&
      props.grow.startsWith("[") &&
      props.grow.endsWith("]")
    ) {
      classes.push(`flex-grow-${props.grow}`);
    } else {
      classes.push(`flex-grow-${props.grow}`);
    }
  }

  if (props.shrink) {
    // Handle arbitrary shrink values
    if (
      typeof props.shrink === "string" &&
      props.shrink.startsWith("[") &&
      props.shrink.endsWith("]")
    ) {
      classes.push(`flex-shrink-${props.shrink}`);
    } else {
      classes.push(`flex-shrink-${props.shrink}`);
    }
  }

  return classes.join(" ");
};

export const getGridClasses = (props: GridProps): string => {
  const classes: string[] = [];

  classes.push("grid");

  if (props.cols) {
    // Handle arbitrary column values
    if (
      typeof props.cols === "string" &&
      props.cols.startsWith("[") &&
      props.cols.endsWith("]")
    ) {
      classes.push(`grid-cols-${props.cols}`);
    } else {
      classes.push(
        props.cols === "none" ? "grid-cols-none" : `grid-cols-${props.cols}`,
      );
    }
  }

  if (props.rows) {
    // Handle arbitrary row values
    if (
      typeof props.rows === "string" &&
      props.rows.startsWith("[") &&
      props.rows.endsWith("]")
    ) {
      classes.push(`grid-rows-${props.rows}`);
    } else {
      classes.push(`grid-rows-${props.rows}`);
    }
  }

  if (props.flow) {
    classes.push(`grid-flow-${props.flow}`);
  }

  if (props.autoRows) {
    classes.push(`auto-rows-${props.autoRows}`);
  }

  if (props.autoCols) {
    classes.push(`auto-cols-${props.autoCols}`);
  }

  if (props.gap) {
    if (
      typeof props.gap === "string" &&
      props.gap.startsWith("[") &&
      props.gap.endsWith("]")
    ) {
      classes.push(`gap-${props.gap}`);
    } else {
      classes.push(`gap-${getSpacingClass(props.gap)}`);
    }
  }

  if (props.columnGap) {
    if (
      typeof props.columnGap === "string" &&
      props.columnGap.startsWith("[") &&
      props.columnGap.endsWith("]")
    ) {
      classes.push(`gap-x-${props.columnGap}`);
    } else {
      classes.push(`gap-x-${getSpacingClass(props.columnGap)}`);
    }
  }

  if (props.rowGap) {
    if (
      typeof props.rowGap === "string" &&
      props.rowGap.startsWith("[") &&
      props.rowGap.endsWith("]")
    ) {
      classes.push(`gap-y-${props.rowGap}`);
    } else {
      classes.push(`gap-y-${getSpacingClass(props.rowGap)}`);
    }
  }

  if (props.placeItems) {
    classes.push(`place-items-${props.placeItems}`);
  }

  if (props.placeContent) {
    classes.push(`place-content-${props.placeContent}`);
  }

  return classes.join(" ");
};
