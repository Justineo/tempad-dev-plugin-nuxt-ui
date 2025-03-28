import type { DesignComponent } from '@tempad-dev/plugins'
import type { IconProperties } from './icon'
import { findChildren } from '@tempad-dev/plugins'
import { cleanPropNames, h, LOREM_IPSUM_TEXT, LOREM_IPSUM_TITLE, pickOverrides } from '../utils'
import { ui } from './config'
import { getIconName } from './icon'

// eslint-disable-next-line ts/no-empty-object-type
export type AccordionProperties = {}

export type CollapsiblePanelProperties = {
  '🙂 IconTrailingName': DesignComponent<IconProperties>
  '𝐓 Label': string
  '𝐓 Description': string
  '👁️ IconLeading': boolean
  '↳ IconLeadingName': DesignComponent<IconProperties>
  '◆ State': 'Closed' | 'Disable' | 'Focus' | 'Open'
}

export function Accordion(component: DesignComponent<AccordionProperties>) {
  const panels = findChildren<DesignComponent<CollapsiblePanelProperties>>(component, {
    type: 'INSTANCE',
    name: ['Collapsible_panel', 'PageAccordionItem'],
  })

  let openCount = 0

  const items = panels.map((panel) => {
    const { state, label, description, iconLeading, iconLeadingName, iconTrailingName } = cleanPropNames(
      panel.properties,
    )

    if (state === 'Open') {
      openCount++
    }

    return pickOverrides(
      {
        label: label || LOREM_IPSUM_TITLE,
        content: description || LOREM_IPSUM_TEXT,
        icon: iconLeading ? getIconName(iconLeadingName.name) : undefined,
        trailingIcon: getIconName(iconTrailingName.name),
        disabled: state === 'Disable',
      },
      {
        disabled: false,
        trailingIcon: ui.icons.chevronDown,
      },
    )
  })

  return h(
    'UAccordion',
    {
      items,
      type: openCount > 1 ? 'multiple' : 'single',
    },
    {
      type: 'single',
    },
  )
}
