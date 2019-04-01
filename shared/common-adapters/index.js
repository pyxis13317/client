// @flow
import flags from '../util/feature-flags'
import {NavigationEvents as _NavigationEvents} from '@react-navigation/core'

// Just to brige old / new nav, deprecate this when routetree is gone
export const NavigationEvents = flags.useNewRouter ? _NavigationEvents : (p: any) => p.children || null

export {default as Animated} from './animated'
export {default as Animation} from './animation'
export {default as Avatar, castPlatformStyles as avatarCastPlatformStyles} from './avatar'
export {default as BackButton} from './back-button'
export {default as BackgroundRepeatBox} from './background-repeat-box'
export {default as Badge} from './badge'
export {default as Banner} from './banner'
export {default as Box, Box2} from './box'
export {default as ButtonBar} from './button-bar'
export {default as Button} from './button'
export {default as QRLines} from './qr-lines'
export {default as QRNotAuthorized} from './qr-not-authorized'
export {default as BoxGrow} from './box-grow'
export {default as Checkbox} from './checkbox'
export {default as ChoiceList} from './choice-list'
export {default as ClickableBox} from './clickable-box'
export {default as CopyText} from './copy-text'
export {ToastContainer, _ToastContainer} from './copy-text'
export {default as CopyableText} from './copyable-text'
export {default as DesktopStyle} from './desktop-style'
export {default as Divider} from './divider'
export {default as Dropdown, DropdownButton} from './dropdown'
export {default as DragAndDrop} from './drag-and-drop'
export {default as Emoji} from './emoji'
export {EmojiIfExists} from './markdown/react'
export {default as ErrorBoundary} from './error-boundary'
export {default as FloatingBox} from './floating-box'
export {default as FloatingMenu} from './floating-menu'
export {default as FloatingPicker} from './floating-picker'
export {default as OverlayParentHOC} from './overlay/parent-hoc'
export type {OverlayParentProps, PropsWithOverlay} from './overlay/parent-hoc'
export {default as FormWithCheckbox} from './form-with-checkbox'
export {default as Header} from './header'
export {default as HeaderHoc, HeaderHocHeader} from './header-hoc'
export {default as HeaderOnMobile} from './header-on-mobile'
export {default as HeaderOrPopup, HeaderOrPopupWithHeader} from './header-or-popup'
export {default as HoverHoc} from './hover-hoc'
export {default as Icon, castPlatformStyles as iconCastPlatformStyles, urlsToImgSet} from './icon'
export {default as Image, RequireImage} from './image'
export {default as InfoNote} from './info-note'
export {default as Input} from './input'
export {default as KeyboardAvoidingView} from './keyboard-avoiding-view'
export {default as List} from './list'
export {default as List2} from './list2'
export {default as LoadingLine} from './loading-line'
export {default as ListItem} from './list-item'
export {
  default as ListItem2,
  largeHeight as largeListItem2Height,
  smallHeight as smallListItem2Height,
} from './list-item2'
export {default as Markdown} from './markdown'
export {MaybePopup, MaybePopupHoc} from './maybe-popup'
export type {MenuItem, MenuItems} from './floating-menu/menu-layout'
export {default as MultiAvatar} from './multi-avatar.js'
export {default as Meta} from './meta'
export {default as NameWithIcon} from './name-with-icon'
export {default as ConnectedNameWithIcon} from './name-with-icon/container'
export {default as NewInput} from './new-input'
export {default as OrientedImage} from './oriented-image'
export {default as Overlay} from './overlay'
export {default as Placeholder} from './placeholder'
export {default as PlainInput} from './plain-input'
export {default as PlatformIcon} from './platform-icon'
export {default as PopupDialog} from './popup-dialog'
export {default as PopupDialogHoc} from './popup-dialog-hoc'
export {default as PopupHeaderText} from './popup-header-text'
export {default as ProgressBar} from './progress-bar'
export {default as ProgressIndicator} from './progress-indicator'
export {default as RadioButton} from './radio-button'
export {default as Reloadable} from './reload'
export {default as SafeAreaView, SafeAreaViewTop} from './safe-area-view'
export {default as SaveIndicator} from './save-indicator'
export {default as SectionDivider} from './section-divider'
export {default as ScrollView} from './scroll-view'
export {default as SectionList} from './section-list'
export {default as StandardScreen} from './standard-screen'
export {default as TabBar} from './tab-bar'
export {default as Tabs} from './tabs'
export {default as Text} from './text'
export {default as Toast} from './toast'
export {default as TimelineMarker} from './timeline-marker'
export {PlaintextUsernames, Usernames} from './usernames'
export {default as UserCard} from './user-card'
export {default as ConnectedUsernames} from './usernames/container'
export {default as WaitingButton} from './waiting-button'
export {default as HOCTimers} from './hoc-timers'
export type {PropsWithTimer} from './hoc-timers'
export type {IconType} from './icon.constants'
export {default as Video} from './video'
export {default as WebView} from './web-view'
export type {WebViewProps, WebViewInjections} from './web-view'
export {default as WithTooltip} from './with-tooltip'
