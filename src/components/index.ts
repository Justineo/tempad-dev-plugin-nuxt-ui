import type { TransformOptions } from '@tempad-dev/plugins'
import type { RenderFn } from '../types'
import { createTransformComponent, mapComponentNames } from '../utils'
import { Accordion } from './accordion'
import { Alert } from './alert'
import { Avatar } from './avatar'
import { AvatarGroup } from './avatar-group'
import { Badge } from './badge'
import { Breadcrumb } from './breadcrumb'
import { Button, BUTTON_NAMES } from './button'
import { ButtonGroup } from './button-group'
import { Calendar } from './calendar'
import { Card } from './card'
import { Carousel } from './carousel'
import { Checkbox } from './checkbox'
import { Chip } from './chip'
import { Collapsible } from './collapsible'
import { ColorPicker } from './color-picker'
import { CommandPalette } from './command-palette'
import { Drawer } from './drawer'
import { DropdownMenu } from './dropdown-menu'
import { FormField } from './form-field'
import { Icon } from './icon'
import { Input, INPUT_NAMES } from './input'
import { InputMenu } from './input-menu'
import { InputNumber } from './input-number'
import { Kbd } from './kbd'
import { Link } from './link'
import { Modal } from './modal'
import { NavigationMenu } from './navigation-menu'
import { Pagination } from './pagination'
import { PinInput } from './pin-input'
import { Popover } from './popover'
import { Progress } from './progress'
import { RadioGroup } from './radio-group'
import { Select, SELECT_NAMES } from './select'
import { SelectMenu } from './select-menu'
import { Separator } from './separator'
import { Skeleton } from './skeleton'
import { Slideover } from './slideover'
import { Slider } from './slider'
import { Stepper } from './stepper'
import { Switch } from './switch'
import { Tabs } from './tabs'
import { Textarea } from './textarea'
import { Toast } from './toast'
import { Tooltip } from './tooltip'

export const COMPONENT_MAP: Record<string, RenderFn> = {
  Accordion,
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  ...mapComponentNames(BUTTON_NAMES, Button),
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Chip,
  Collapsible,
  ColorPicker,
  CommandPalette,
  Drawer,
  DropdownMenu,
  FormField,
  Icon,
  ...mapComponentNames(INPUT_NAMES, Input),
  InputMenu,
  InputNumber,
  Kbd,
  Link,
  Modal,
  NavigationMenu,
  Pagination,
  PinInput,
  Popover,
  Progress,
  RadioGroup,
  ...mapComponentNames(SELECT_NAMES, Select),
  SelectMenu,
  Separator,
  Skeleton,
  Slideover,
  Slider,
  Stepper,
  Switch,
  Tabs,
  TextArea: Textarea,
  Toast,
  Tooltip,
}

export const transformComponent: TransformOptions['transformComponent'] = createTransformComponent(COMPONENT_MAP)
