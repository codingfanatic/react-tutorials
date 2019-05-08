# React-Native Files
A collection of JavaScript files created during my journey to learn React Native.

https://facebook.github.io/react-native/docs/getting-started

Hello World
>Render

>Component

>JSX

Props (pt. 1)

>Sources are props for controlling the way images look

Props (pt.2) Style and custom props

>JavaScript Syntax

>Component Hierarchy

>Props and Custom props

States

>States

>Constructors

Style

>In an array, the last style will ALWAYS take precedence over others. 

Size

>The size of each View component can be explicitly styled

>Fixed dimensions are ideal for components set to render at the exact same size regardless of the size of the screen

>Flex defines the height of a component. It is a ratio compared to other components on screen.

>Removing the parent flex prevents the child components from rendering since it won't have any dimensions

>Changing the parent height causes child components to render inside an area defined by the size of the parent

Flexbox

>Flexbox is designed to display consistent layouts on different sized screens

>flexDirection determines the primary axis of a layout

>FlexDirections organize child components vertically (column) by default. Row organizes them horizontally.

Justify Content

>justifyContent determines the way children components are distributed along the primary axis of the parent component

>Options include flex-start, center, flex-end, space-around, space-between and space-evenly.

Align Items

>alignItems determines the alignment of children along the secondary axis

>If primary is row, secondary is column and vice versa

>Options: flex-start, center, flex-end, and stretch.

>components only stretch when they don't have fixed dimensions on the secondary axis

Input Text

>TextInput is a component which allows users to enter text

>onChangeText is a prop called every time the text is changed

Buttons

>Button component has an onPress prop for defining actions performed when pressed

>The title prop is the text displayed inside the button

Touches

>TouchableHighlight is ideal wherever links/buttons would go. The background darkens when touched

>TouchableNativeFeedback displays an ink surface with ripples when touched

>TouchableOpacity reduces the opacity of the button showing the background to be seen through while pressed down

>TouchableWithoutFeedback is a super basic button which doesn't react when touched

ScrollViews

>ScrollViews are generic scrolling containers which can host multiple components/views

>Able to scroll horizontal by setting the horizontal property

>Best for displaying a small amount of things of a limited size

>FlatList component is better for a longer list
