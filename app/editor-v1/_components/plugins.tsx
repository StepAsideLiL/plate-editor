import { withProps } from "@udecode/cn";
import { createPlugins, RenderAfterEditable } from "@udecode/plate-common";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";
import { createDndPlugin } from "@udecode/plate-dnd";
import { HeadingElement } from "@/components/plate-ui/heading-element";
import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
import { withPlaceholders } from "@/components/plate-ui/placeholder";
import { withDraggables } from "@/components/plate-ui/with-draggables";
import { createLinkPlugin } from "@udecode/plate-link";
import { LinkFloatingToolbar } from "@/components/plate-ui/link-floating-toolbar";

export const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createHeadingPlugin(),
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
        [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
        [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
        [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
        [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
        [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
        [ELEMENT_PARAGRAPH]: ParagraphElement,
      })
    ),
  }
);
