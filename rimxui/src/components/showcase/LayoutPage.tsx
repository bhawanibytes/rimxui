import { Box, Flex, Grid } from "@components/Layout";
import { Typography } from "@/components/Typography";
import { ColorVariant, SpacingValue } from "@types";
import PreviewWrapper from "../PreviewWrapper";
import { ShowcaseHeader } from "./common";

export const LayoutPreview: React.FC = () => {
  const COLOR_VARIANTS: Array<ColorVariant> = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
    "white",
    "black",
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <ShowcaseHeader
        title="Layout"
        description="Our Layout system provides flexible components for building responsive and consistent layouts across your application."
      />

      <PreviewWrapper
        label="Basic Usage"
        preview={
          <div className="space-y-6">
            <Box
              p="4"
              border="2"
              rounded="md"
              bg="gray-50"
              shadow="md"
              borderColor="primary"
            >
              <Typography
                type="text"
                variant="default"
                size="md"
                className="text-center font-medium"
              >
                Simple Box Component
              </Typography>
            </Box>

            <Flex
              justify="between"
              p="4"
              border="2"
              rounded="md"
              bg="blue-50"
              shadow="md"
              borderColor="primary"
            >
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="blue-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-blue-700"
                >
                  Flex Item 1
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="blue-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-blue-700"
                >
                  Flex Item 2
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="blue-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-blue-700"
                >
                  Flex Item 3
                </Typography>
              </Box>
            </Flex>

            <Grid
              cols="3"
              gap="4"
              p="4"
              border="2"
              rounded="md"
              bg="green-50"
              shadow="md"
              borderColor="primary"
            >
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 1
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 2
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 3
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 4
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 5
                </Typography>
              </Box>
              <Box
                p="3"
                border="1"
                rounded="md"
                bg="white"
                shadow="sm"
                borderColor="green-200"
              >
                <Typography
                  type="text"
                  variant="default"
                  size="md"
                  className="text-center font-medium text-green-700"
                >
                  Grid Item 6
                </Typography>
              </Box>
            </Grid>
          </div>
        }
        code={`
<Box p="4" border="2" rounded="md" bg="gray-50" shadow="md" borderColor="primary">
  <Typography type="text" variant="default" size="md" className="text-center font-medium">
    Simple Box Component
  </Typography>
</Box>

<Flex justify="between" p="4" border="2" rounded="md" bg="blue-50" shadow="md" borderColor="primary">
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="blue-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-blue-700">
      Flex Item 1
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="blue-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-blue-700">
      Flex Item 2
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="blue-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-blue-700">
      Flex Item 3
    </Typography>
  </Box>
</Flex>

<Grid cols="3" gap="4" p="4" border="2" rounded="md" bg="green-50" shadow="md" borderColor="primary">
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 1
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 2
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 3
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 4
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 5
    </Typography>
  </Box>
  <Box p="3" border="1" rounded="md" bg="white" shadow="sm" borderColor="green-200">
    <Typography type="text" variant="default" size="md" className="text-center font-medium text-green-700">
      Grid Item 6
    </Typography>
  </Box>
</Grid>
        `}
        variant="default"
      />
    </div>
  );

  const renderBoxSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Box</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Box is the most basic layout component. It provides a wrapper with
          utilities for spacing, colors, borders, and other styling options.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Spacing</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Box components can have margin and padding in various sizes.
          </p>
          <PreviewWrapper
            label="Box Padding"
            preview={
              <div className="space-y-4">
                {["2", "4", "6", "8"].map((padding) => (
                  <Box
                    key={padding}
                    p={padding as SpacingValue}
                    border="1"
                    bg="gray-100"
                    rounded="md"
                  >
                    Box with p="{padding}"
                  </Box>
                ))}
              </div>
            }
            code={`
{["2", "4", "6", "8"].map((padding) => (
  <Box
    key={padding}
    p={padding}
    border="1"
    bg="gray-100"
    rounded="md"
  >
    Box with p="{padding}"
  </Box>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Colors</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Box components can have different background and text colors.
          </p>
          <PreviewWrapper
            label="Box Background Colors"
            preview={
              <div className="grid grid-cols-2 gap-4">
                {COLOR_VARIANTS.map((color) => (
                  <Box
                    key={color}
                    p="4"
                    bg={color}
                    color={
                      color === "white" || color === "primary"
                        ? "black"
                        : "white"
                    }
                    border="1"
                    rounded="md"
                  >
                    {color}
                  </Box>
                ))}
              </div>
            }
            code={`
{COLOR_VARIANTS.map((color) => (
  <Box
    key={color}
    p="4"
    bg={color}
    color={color === "white" || color === "primary" ? "black" : "white"}
    border="1"
    rounded="md"
  >
    {color}
  </Box>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Borders and Shadows</h3>
          <PreviewWrapper
            label="Box Borders and Shadows"
            preview={
              <div className="space-y-4">
                {["0", "1", "2", "4", "8"].map((borderWidth) => (
                  <Box
                    key={borderWidth}
                    p="4"
                    border={borderWidth as "0" | "1" | "2" | "4" | "8"}
                    borderColor="primary"
                    rounded="md"
                    mb="4"
                  >
                    Box with border="{borderWidth}"
                  </Box>
                ))}

                {["none", "sm", "md", "lg", "xl", "2xl"].map((shadowSize) => (
                  <Box
                    key={shadowSize}
                    p="4"
                    shadow={
                      shadowSize as "none" | "sm" | "md" | "lg" | "xl" | "2xl"
                    }
                    rounded="md"
                    mb="4"
                  >
                    Box with shadow="{shadowSize}"
                  </Box>
                ))}
              </div>
            }
            code={`
{/* Borders */}
{["0", "1", "2", "4", "8"].map((borderWidth) => (
  <Box
    key={borderWidth}
    p="4"
    border={borderWidth}
    borderColor="primary"
    rounded="md"
    mb="4"
  >
    Box with border="{borderWidth}"
  </Box>
))}

{/* Shadows */}
{["none", "sm", "md", "lg", "xl", "2xl"].map((shadowSize) => (
  <Box
    key={shadowSize}
    p="4"
    shadow={shadowSize}
    rounded="md"
    mb="4"
  >
    Box with shadow="{shadowSize}"
  </Box>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Rounded Corners</h3>
          <PreviewWrapper
            label="Box Border Radius"
            preview={
              <div className="space-y-4">
                {["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"].map(
                  (radius) => (
                    <Box
                      key={radius}
                      p="4"
                      bg="gray-100"
                      border="1"
                      rounded={
                        radius as
                          | "none"
                          | "sm"
                          | "md"
                          | "lg"
                          | "xl"
                          | "2xl"
                          | "3xl"
                          | "full"
                      }
                    >
                      Box with rounded="{radius}"
                    </Box>
                  ),
                )}
              </div>
            }
            code={`
{["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"].map((radius) => (
  <Box
    key={radius}
    p="4"
    bg="gray-100"
    border="1"
    rounded={radius}
  >
    Box with rounded="{radius}"
  </Box>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Sizing</h3>
          <PreviewWrapper
            label="Box Width and Height"
            preview={
              <div className="space-y-4">
                {["auto", "2", "4", "24", "48", "full"].map((width) => (
                  <Box
                    key={width}
                    p="2"
                    width={width as SpacingValue}
                    bg="gray-100"
                    border="1"
                    rounded="md"
                  >
                    Box with width="{width}"
                  </Box>
                ))}

                <div className="flex h-32 gap-4">
                  {["auto", "8", "16", "full"].map((height) => (
                    <Box
                      key={height}
                      p="2"
                      height={height as SpacingValue}
                      width="24"
                      bg="gray-100"
                      border="1"
                      rounded="md"
                      display="flex"
                      className="justify-center items-center"
                    >
                      height="{height}"
                    </Box>
                  ))}
                </div>
              </div>
            }
            code={`
{/* Width variations */}
{["auto", "2", "4", "24", "48", "full"].map((width) => (
  <Box
    key={width}
    p="2"
    width={width}
    bg="gray-100"
    border="1"
    rounded="md"
  >
    Box with width="{width}"
  </Box>
))}

{/* Height variations */}
<div className="flex h-32 gap-4">
  {["auto", "8", "16", "full"].map((height) => (
    <Box
      key={height}
      p="2"
      height={height}
      width="24"
      bg="gray-100"
      border="1"
      rounded="md"
      display="flex"
      className="justify-center items-center"
    >
      height="{height}"
    </Box>
  ))}
</div>
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Box Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Card Component"
              preview={
                <Box
                  p="6"
                  bg="white"
                  border="1"
                  borderColor="gray-200"
                  rounded="lg"
                  shadow="md"
                  maxW="96"
                >
                  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
                  <p className="text-gray-600 mb-4">
                    This is a simple card built using the Box component with
                    various styling options.
                  </p>
                  <button className="bg-primary-500 text-white px-4 py-2 rounded">
                    Action Button
                  </button>
                </Box>
              }
              code={`
<Box
  p="6"
  bg="white"
  border="1"
  borderColor="gray-200"
  rounded="lg"
  shadow="md"
  maxW="96"
>
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600 mb-4">
    This is a simple card built using the Box component with various styling options.
  </p>
  <button className="bg-primary-500 text-white px-4 py-2 rounded">
    Action Button
  </button>
</Box>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Alert Component"
              preview={
                <Box
                  p="4"
                  bg="blue-50"
                  border="1"
                  borderColor="blue-200"
                  rounded="md"
                  display="flex"
                  className="items-center"
                >
                  <div className="mr-3">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">Information</h4>
                    <p className="text-sm text-blue-700">
                      This is an informational message for the user.
                    </p>
                  </div>
                </Box>
              }
              code={`
<Box
  p="4"
  bg="blue-50"
  border="1"
  borderColor="blue-200"
  rounded="md"
  display="flex"
  className="items-center"
>
  <div className="mr-3">
    <svg
      className="w-5 h-5 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div>
    <h4 className="font-medium text-blue-800">Information</h4>
    <p className="text-sm text-blue-700">
      This is an informational message for the user.
    </p>
  </div>
</Box>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFlexSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Flex</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Flex is a layout component built on top of Box that provides flexible
          alignment and distribution of space between items. It's ideal for
          creating one-dimensional layouts.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Direction</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control the direction of flex items with the direction prop.
          </p>
          <PreviewWrapper
            label="Flex Direction"
            preview={
              <div className="space-y-4">
                {["row", "row-reverse", "col", "col-reverse"].map(
                  (direction) => (
                    <Box key={direction} mb="4">
                      <p className="mb-2 text-sm">direction="{direction}"</p>
                      <Flex
                        direction={
                          direction as
                            | "row"
                            | "row-reverse"
                            | "col"
                            | "col-reverse"
                        }
                        p="4"
                        border="1"
                        rounded="md"
                        bg="gray-100"
                        className={direction.includes("col") ? "h-32" : ""}
                      >
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 1
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 2
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 3
                        </Box>
                      </Flex>
                    </Box>
                  ),
                )}
              </div>
            }
            code={`
{["row", "row-reverse", "col", "col-reverse"].map((direction) => (
  <Flex
    direction={direction}
    p="4"
    border="1"
    rounded="md"
    bg="gray-100"
    className={direction.includes("col") ? "h-32" : ""}
  >
    <Box p="2" border="1" rounded="sm" bg="white">Item 1</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 2</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 3</Box>
  </Flex>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Justify Content</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control how flex items are positioned along the main axis.
          </p>
          <PreviewWrapper
            label="Justify Content"
            preview={
              <div className="space-y-4">
                {["start", "center", "end", "between", "around", "evenly"].map(
                  (justify) => (
                    <Box key={justify} mb="4">
                      <p className="mb-2 text-sm">justify="{justify}"</p>
                      <Flex
                        justify={
                          justify as
                            | "start"
                            | "center"
                            | "end"
                            | "between"
                            | "around"
                            | "evenly"
                        }
                        p="4"
                        border="1"
                        rounded="md"
                        bg="gray-100"
                      >
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 1
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 2
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Item 3
                        </Box>
                      </Flex>
                    </Box>
                  ),
                )}
              </div>
            }
            code={`
{["start", "center", "end", "between", "around", "evenly"].map((justify) => (
  <Flex
    justify={justify}
    p="4"
    border="1"
    rounded="md"
    bg="gray-100"
  >
    <Box p="2" border="1" rounded="sm" bg="white">Item 1</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 2</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 3</Box>
  </Flex>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Align Items</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control how flex items are aligned along the cross axis.
          </p>
          <PreviewWrapper
            label="Align Items"
            preview={
              <div className="space-y-4">
                {["start", "center", "end", "stretch", "baseline"].map(
                  (align) => (
                    <Box key={align} mb="4">
                      <p className="mb-2 text-sm">align="{align}"</p>
                      <Flex
                        align={
                          align as
                            | "start"
                            | "center"
                            | "end"
                            | "stretch"
                            | "baseline"
                        }
                        p="4"
                        border="1"
                        rounded="md"
                        bg="gray-100"
                        className="h-32"
                      >
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Short
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          Medium sized item
                        </Box>
                        <Box p="2" border="1" rounded="sm" bg="white">
                          This is a taller item
                        </Box>
                      </Flex>
                    </Box>
                  ),
                )}
              </div>
            }
            code={`
{["start", "center", "end", "stretch", "baseline"].map((align) => (
  <Flex
    align={align}
    p="4"
    border="1"
    rounded="md"
    bg="gray-100"
    className="h-32"
  >
    <Box p="2" border="1" rounded="sm" bg="white">Short</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Medium sized item</Box>
    <Box p="2" border="1" rounded="sm" bg="white">This is a taller item</Box>
  </Flex>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Gap</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Add space between flex items with the gap prop.
          </p>
          <PreviewWrapper
            label="Flex Gap"
            preview={
              <div className="space-y-4">
                {["0", "2", "4", "8", "16"].map((gap) => (
                  <Box key={gap} mb="4">
                    <p className="mb-2 text-sm">gap="{gap}"</p>
                    <Flex
                      gap={gap as SpacingValue}
                      p="4"
                      border="1"
                      rounded="md"
                      bg="gray-100"
                    >
                      <Box p="2" border="1" rounded="sm" bg="white">
                        Item 1
                      </Box>
                      <Box p="2" border="1" rounded="sm" bg="white">
                        Item 2
                      </Box>
                      <Box p="2" border="1" rounded="sm" bg="white">
                        Item 3
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </div>
            }
            code={`
{["0", "2", "4", "8", "16"].map((gap) => (
  <Flex
    gap={gap}
    p="4"
    border="1"
    rounded="md"
    bg="gray-100"
  >
    <Box p="2" border="1" rounded="sm" bg="white">Item 1</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 2</Box>
    <Box p="2" border="1" rounded="sm" bg="white">Item 3</Box>
  </Flex>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Wrap</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control whether flex items wrap or not.
          </p>
          <PreviewWrapper
            label="Flex Wrap"
            preview={
              <div className="space-y-4">
                {["nowrap", "wrap", "wrap-reverse"].map((wrap) => (
                  <Box key={wrap} mb="4">
                    <p className="mb-2 text-sm">wrap="{wrap}"</p>
                    <Flex
                      wrap={wrap as "wrap" | "nowrap" | "wrap-reverse"}
                      p="4"
                      border="1"
                      rounded="md"
                      bg="gray-100"
                      className="w-64"
                    >
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 1
                        </Typography>
                      </Box>
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 2
                        </Typography>
                      </Box>
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 3
                        </Typography>
                      </Box>
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 4
                        </Typography>
                      </Box>
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 5
                        </Typography>
                      </Box>
                      <Box p="2" m="1" border="1" rounded="sm" bg="white">
                        <Typography
                          type="text"
                          variant="default"
                          size="md"
                          className="text-center"
                        >
                          Item 6
                        </Typography>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </div>
            }
            code={`
{["nowrap", "wrap", "wrap-reverse"].map((wrap) => (
  <Flex
    wrap={wrap}
    p="4"
    border="1"
    rounded="md"
    bg="gray-100"
    className="w-64"
  >
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 1
      </Typography>
    </Box>
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 2
      </Typography>
    </Box>
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 3
      </Typography>
    </Box>
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 4
      </Typography>
    </Box>
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 5
      </Typography>
    </Box>
    <Box p="2" m="1" border="1" rounded="sm" bg="white">
      <Typography type="text" variant="default" size="md" className="text-center">
        Item 6
      </Typography>
    </Box>
  </Flex>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Grow and Shrink</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control how flex items grow and shrink.
          </p>
          <PreviewWrapper
            label="Flex Grow and Shrink"
            preview={
              <div className="space-y-8">
                <Box>
                  <p className="mb-2 text-sm">Flex Grow</p>
                  <Flex p="4" border="1" rounded="md" bg="gray-100">
                    <Box p="2" border="1" rounded="sm" bg="white" className="w-20">
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        Fixed
                      </Typography>
                    </Box>
                    <Box
                      p="2"
                      border="1"
                      rounded="sm"
                      bg="white"
                      className="flex-grow"
                    >
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        grow="1"
                      </Typography>
                    </Box>
                    <Box p="2" border="1" rounded="sm" bg="white" className="w-20">
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        Fixed
                      </Typography>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <p className="mb-2 text-sm">Flex Shrink</p>
                  <Flex p="4" border="1" rounded="md" bg="gray-100" className="w-64">
                    <Box
                      p="2"
                      border="1"
                      rounded="sm"
                      bg="white"
                      className="w-32 flex-shrink"
                    >
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        shrink="1"
                      </Typography>
                    </Box>
                    <Box
                      p="2"
                      border="1"
                      rounded="sm"
                      bg="white"
                      className="w-32 flex-shrink-0"
                    >
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        shrink="0"
                      </Typography>
                    </Box>
                    <Box
                      p="2"
                      border="1"
                      rounded="sm"
                      bg="white"
                      className="w-32 flex-shrink"
                    >
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="text-center"
                      >
                        shrink="1"
                      </Typography>
                    </Box>
                  </Flex>
                </Box>
              </div>
            }
            code={`
{/* Flex Grow */}
<Flex p="4" border="1" rounded="md" bg="gray-100">
  <Box p="2" border="1" rounded="sm" bg="white" className="w-20">
    <Typography type="text" variant="default" size="md" className="text-center">
      Fixed
    </Typography>
  </Box>
  <Box p="2" border="1" rounded="sm" bg="white" className="flex-grow">
    <Typography type="text" variant="default" size="md" className="text-center">
      grow="1"
    </Typography>
  </Box>
  <Box p="2" border="1" rounded="sm" bg="white" className="w-20">
    <Typography type="text" variant="default" size="md" className="text-center">
      Fixed
    </Typography>
  </Box>
</Flex>

{/* Flex Shrink */}
<Flex p="4" border="1" rounded="md" bg="gray-100" className="w-64">
  <Box p="2" border="1" rounded="sm" bg="white" className="w-32 flex-shrink">
    <Typography type="text" variant="default" size="md" className="text-center">
      shrink="1"
    </Typography>
  </Box>
  <Box p="2" border="1" rounded="sm" bg="white" className="w-32 flex-shrink-0">
    <Typography type="text" variant="default" size="md" className="text-center">
      shrink="0"
    </Typography>
  </Box>
  <Box p="2" border="1" rounded="sm" bg="white" className="w-32 flex-shrink">
    <Typography type="text" variant="default" size="md" className="text-center">
      shrink="1"
    </Typography>
  </Box>
</Flex>
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Flex Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Navigation Bar"
              preview={
                <Flex
                  justify="between"
                  align="center"
                  p="4"
                  bg="gray-800"
                  color="white"
                  rounded="md"
                >
                  <div className="font-bold text-xl">Logo</div>
                  <Flex gap="6">
                    <a href="#" className="hover:text-gray-300">
                      Home
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      Features
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      Pricing
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      About
                    </a>
                  </Flex>
                  <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded">
                    Sign Up
                  </button>
                </Flex>
              }
              code={`
<Flex
  justify="between"
  align="center"
  p="4"
  bg="gray-800"
  color="white"
  rounded="md"
>
  <div className="font-bold text-xl">Logo</div>
  <Flex gap="6">
    <a href="#" className="hover:text-gray-300">Home</a>
    <a href="#" className="hover:text-gray-300">Features</a>
    <a href="#" className="hover:text-gray-300">Pricing</a>
    <a href="#" className="hover:text-gray-300">About</a>
  </Flex>
  <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded">
    Sign Up
  </button>
</Flex>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Form Group"
              preview={
                <Flex
                  direction="col"
                  gap="4"
                  p="6"
                  border="1"
                  borderColor="gray-200"
                  rounded="lg"
                  shadow="md"
                  className="max-w-md"
                >
                  <h3 className="text-xl font-semibold">Contact Form</h3>

                  <Flex direction="col" gap="2">
                    <label className="font-medium">Name</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-2"
                      placeholder="Enter your name"
                    />
                  </Flex>

                  <Flex direction="col" gap="2">
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded p-2"
                      placeholder="Enter your email"
                    />
                  </Flex>

                  <Flex direction="col" gap="2">
                    <label className="font-medium">Message</label>
                    <textarea
                      className="border border-gray-300 rounded p-2"
                      rows={4}
                      placeholder="Enter your message"
                    />
                  </Flex>

                  <button className="bg-primary-500 text-white px-4 py-2 rounded self-start">
                    Submit
                  </button>
                </Flex>
              }
              code={`
<Flex
  direction="col"
  gap="4"
  p="6"
  border="1"
  borderColor="gray-200"
  rounded="lg"
  shadow="md"
  className="max-w-md"
>
  <h3 className="text-xl font-semibold">Contact Form</h3>
  
  <Flex direction="col" gap="2">
    <label className="font-medium">Name</label>
    <input 
      type="text" 
      className="border border-gray-300 rounded p-2" 
      placeholder="Enter your name"
    />
  </Flex>
  
  <Flex direction="col" gap="2">
    <label className="font-medium">Email</label>
    <input 
      type="email" 
      className="border border-gray-300 rounded p-2" 
      placeholder="Enter your email"
    />
  </Flex>
  
  <Flex direction="col" gap="2">
    <label className="font-medium">Message</label>
    <textarea 
      className="border border-gray-300 rounded p-2" 
      rows={4}
      placeholder="Enter your message"
    />
  </Flex>
  
  <button className="bg-primary-500 text-white px-4 py-2 rounded self-start">
    Submit
  </button>
</Flex>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderGridSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Grid</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Grid is a two-dimensional layout component that allows you to create
          complex, responsive layouts with rows and columns.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Grid Columns</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control the number of columns in your grid.
          </p>
          <PreviewWrapper
            label="Grid Columns"
            preview={
              <div className="space-y-8">
                {["1", "2", "3", "4", "6"].map((cols) => (
                  <Box key={cols} mb="6">
                    <p className="mb-2 text-sm">cols="{cols}"</p>
                    <Grid
                      cols={
                        cols as
                          | "1"
                          | "2"
                          | "3"
                          | "4"
                          | "5"
                          | "6"
                          | "7"
                          | "8"
                          | "9"
                          | "10"
                          | "11"
                          | "12"
                          | "none"
                      }
                      gap="4"
                      p="4"
                      border="2"
                      rounded="md"
                      bg="teal-50"
                      shadow="md"
                      borderColor="teal-200"
                    >
                      {Array.from({ length: Number(cols) * 2 }).map((_, i) => (
                        <Box
                          key={i}
                          p="3"
                          border="1"
                          rounded="md"
                          bg="white"
                          shadow="sm"
                          borderColor="teal-200"
                          display="flex"
                          className="justify-center items-center"
                        >
                          <Typography
                            type="text"
                            variant="default"
                            size="md"
                            className="font-medium text-teal-700"
                          >
                            Item {i + 1}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </div>
            }
            code={`
{["1", "2", "3", "4", "6"].map((cols) => (
  <Grid
    cols={cols}
    gap="4"
    p="4"
    border="2"
    rounded="md"
    bg="teal-50"
    shadow="md"
    borderColor="teal-200"
  >
    {Array.from({ length: Number(cols) * 2 }).map((_, i) => (
      <Box
        key={i}
        p="3"
        border="1"
        rounded="md"
        bg="white"
        shadow="sm"
        borderColor="teal-200"
        display="flex"
        className="justify-center items-center"
      >
        <Typography type="text" variant="default" size="md" className="font-medium text-teal-700">
          Item {i + 1}
        </Typography>
      </Box>
    ))}
  </Grid>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Gap</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Control the spacing between grid items with the gap prop.
          </p>
          <PreviewWrapper
            label="Grid Gap"
            preview={
              <div className="space-y-8">
                {["0", "2", "4", "8"].map((gap) => (
                  <Box key={gap} mb="6">
                    <p className="mb-2 text-sm">gap="{gap}"</p>
                    <Grid
                      cols="3"
                      gap={gap as SpacingValue}
                      p="4"
                      border="2"
                      rounded="md"
                      bg="teal-50"
                      shadow="md"
                      borderColor="teal-200"
                    >
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Box
                          key={i}
                          p="3"
                          border="1"
                          rounded="md"
                          bg="white"
                          shadow="sm"
                          borderColor="teal-200"
                          display="flex"
                          className="justify-center items-center"
                        >
                          <Typography
                            type="text"
                            variant="default"
                            size="md"
                            className="font-medium text-teal-700"
                          >
                            Item {i + 1}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </div>
            }
            code={`
{["0", "2", "4", "8"].map((gap) => (
  <Grid
    cols="3"
    gap={gap}
    p="4"
    border="2"
    rounded="md"
    bg="teal-50"
    shadow="md"
    borderColor="teal-200"
  >
    {Array.from({ length: 6 }).map((_, i) => (
      <Box
        key={i}
        p="3"
        border="1"
        rounded="md"
        bg="white"
        shadow="sm"
        borderColor="teal-200"
        display="flex"
        className="justify-center items-center"
      >
        <Typography type="text" variant="default" size="md" className="font-medium text-teal-700">
          Item {i + 1}
        </Typography>
      </Box>
    ))}
  </Grid>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Grid Use Cases</h3>
          <PreviewWrapper
            label="Photo Gallery"
            preview={
              <Grid
                cols="3"
                gap="4"
                p="4"
                border="2"
                rounded="md"
                bg="teal-50"
                shadow="md"
                borderColor="teal-200"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <Box
                    key={i}
                    p="0"
                    border="1"
                    rounded="md"
                    bg="white"
                    shadow="sm"
                    overflow="hidden"
                    borderColor="teal-200"
                  >
                    <img
                      src={`https://picsum.photos/seed/${i + 1}/300/200`}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-40 object-cover"
                    />
                    <Box p="3">
                      <Typography
                        type="text"
                        variant="default"
                        size="md"
                        className="font-medium"
                      >
                        Photo {i + 1}
                      </Typography>
                      <Typography
                        type="text"
                        variant="secondary"
                        size="sm"
                      >
                        A beautiful landscape photo
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
            }
            code={`
<Grid
  cols="3"
  gap="4"
  p="4"
  border="2"
  rounded="md"
  bg="teal-50"
  shadow="md"
  borderColor="teal-200"
>
  {Array.from({ length: 6 }).map((_, i) => (
    <Box
      key={i}
      p="0"
      border="1"
      rounded="md"
      bg="white"
      shadow="sm"
      overflow="hidden"
      borderColor="teal-200"
    >
      <img
        src={\`https://picsum.photos/seed/\${i + 1}/300/200\`}
        alt={\`Photo \${i + 1}\`}
        className="w-full h-40 object-cover"
      />
      <Box p="3">
        <Typography
          type="text"
          variant="default"
          size="md"
          className="font-medium"
        >
          Photo {i + 1}
        </Typography>
        <Typography
          type="text"
          variant="secondary"
          size="sm"
        >
          A beautiful landscape photo
        </Typography>
      </Box>
    </Box>
  ))}
</Grid>
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Dashboard Layout</h3>
          <PreviewWrapper
            label="Dashboard Grid"
            preview={
              <Grid
                cols="4"
                gap="4"
                p="4"
                border="2"
                rounded="md"
                bg="gray-50"
                shadow="md"
                borderColor="gray-200"
              >
                {/* Header spanning full width */}
                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-4"
                >
                  <Typography
                    type="heading"
                    level={3}
                    variant="default"
                    size="lg"
                    className="text-center"
                  >
                    Dashboard Header
                  </Typography>
                </Box>

                {/* Sidebar */}
                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-1 row-span-3"
                >
                  <Typography
                    type="heading"
                    level={4}
                    variant="default"
                    size="md"
                  >
                    Sidebar
                  </Typography>
                  <ul className="mt-4 space-y-2">
                    <li>Dashboard</li>
                    <li>Analytics</li>
                    <li>Reports</li>
                    <li>Settings</li>
                  </ul>
                </Box>

                {/* Main content areas */}
                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-3"
                >
                  <Typography
                    type="heading"
                    level={4}
                    variant="default"
                    size="md"
                  >
                    Overview
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="md"
                    className="mt-2"
                  >
                    Summary of key metrics and performance indicators.
                  </Typography>
                </Box>

                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-3"
                >
                  <Typography
                    type="heading"
                    level={4}
                    variant="default"
                    size="md"
                  >
                    Statistics
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="md"
                    className="mt-2"
                  >
                    Detailed analytics and statistical information.
                  </Typography>
                </Box>

                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-3"
                >
                  <Typography
                    type="heading"
                    level={4}
                    variant="default"
                    size="md"
                  >
                    Recent Activity
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="md"
                    className="mt-2"
                  >
                    Log of recent actions and system events.
                  </Typography>
                </Box>

                {/* Footer spanning full width */}
                <Box
                  p="4"
                  border="1"
                  rounded="md"
                  bg="white"
                  shadow="sm"
                  borderColor="gray-200"
                  className="col-span-4"
                >
                  <Typography
                    type="text"
                    variant="secondary"
                    size="sm"
                    className="text-center"
                  >
                    © 2023 Dashboard Example. All rights reserved.
                  </Typography>
                </Box>
              </Grid>
            }
            code={`
<Grid
  cols="4"
  gap="4"
  p="4"
  border="2"
  rounded="md"
  bg="gray-50"
  shadow="md"
  borderColor="gray-200"
>
  {/* Header spanning full width */}
  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-4"
  >
    <Typography
      type="heading"
      level={3}
      variant="default"
      size="lg"
      className="text-center"
    >
      Dashboard Header
    </Typography>
  </Box>

  {/* Sidebar */}
  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-1 row-span-3"
  >
    <Typography
      type="heading"
      level={4}
      variant="default"
      size="md"
    >
      Sidebar
    </Typography>
    <ul className="mt-4 space-y-2">
      <li>Dashboard</li>
      <li>Analytics</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </Box>

  {/* Main content areas */}
  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-3"
  >
    <Typography
      type="heading"
      level={4}
      variant="default"
      size="md"
    >
      Overview
    </Typography>
    <Typography
      type="text"
      variant="secondary"
      size="md"
      className="mt-2"
    >
      Summary of key metrics and performance indicators.
    </Typography>
  </Box>

  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-3"
  >
    <Typography
      type="heading"
      level={4}
      variant="default"
      size="md"
    >
      Statistics
    </Typography>
    <Typography
      type="text"
      variant="secondary"
      size="md"
      className="mt-2"
    >
      Detailed analytics and statistical information.
    </Typography>
  </Box>

  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-3"
  >
    <Typography
      type="heading"
      level={4}
      variant="default"
      size="md"
    >
      Recent Activity
    </Typography>
    <Typography
      type="text"
      variant="secondary"
      size="md"
      className="mt-2"
    >
      Log of recent actions and system events.
    </Typography>
  </Box>

  {/* Footer spanning full width */}
  <Box
    p="4"
    border="1"
    rounded="md"
    bg="white"
    shadow="sm"
    borderColor="gray-200"
    className="col-span-4"
  >
    <Typography
      type="text"
      variant="secondary"
      size="sm"
      className="text-center"
    >
      © 2023 Dashboard Example. All rights reserved.
    </Typography>
  </Box>
</Grid>
            `}
            variant="default"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-16 py-8">
      {renderIntroduction()}
      {renderBoxSection()}
      {renderFlexSection()}
      {renderGridSection()}
    </div>
  );
};
