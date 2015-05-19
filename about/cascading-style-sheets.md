**[Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)**: The most important property for controlling layout.

* Block: makes elements a block box (ex. links on either side of a page going up and down that direct you to parts of the site)
* Inline: makes elements sit in the same line (ex. links on top of a page that direct you to different parts of the site)
* Inline-block: makes elements a block box but allows other things to sit next to it
* None: makes elements and content disappear from a page


**Margin**: Space around element, between edge of page and border

* Margin: will effect all sides of the element
* Margin-left: effects the left side
* Margin-right: effects the right side
* Margin-top: effects the top
* Margin-bottom: effects the bottom
* (Margin: auto): will automatically center the element with in the margin


**Max-width**: sets width to a maximum amount. ideal for use with devices like mobile phones

**Box-sizing**: used so the addition of margin, padding, and border won't increase the desired width

**Border**: The edge of an element

* Border: effects all sides of the border
* Border-left: effects left side
* Border-right: effects right side
* Border-top: effects top
* Border-bottom: effects bottom


**Padding**: The space between content and border

* Padding: effects all sides
* Padding-left: effects left side
* Padding-right: effects right side
* Padding-top: effects top side
* Padding-bottom: effects bottom side


**Position**: Sets the position of an element on a page

* static: default value, element with this position isn't position any specific way
* relative: acts like static but you can give it additional info to move it around
* fixed: element has a fixed position on a page and will be there no matter how you move around on the page
* absolute: behaves like fixed except relative to the nearest ancestor. If no ancestor it positions itself relative to the body


**Float**: Intended to wrap text around an image

* Right: moves elements to the right
* Left: moves elements to the left


**Clear**: helps control the behavior of floats, used to avoid overlapping elements

* Left: moves out of the way for elements that are float: left
* Right: moves out of the way for elements that are float: right
* Both: moves out of the way for either element with a float


**Clearfix Hack**: helps elements that have a floated item that's bigger than the element

* overflow:auto


**Width**: sets the width of an element

* px: how many pixels
* em: size is relative to the default size of the given device
* Percent: Percent is a measurement unit relative to the containing block


**Height**: sets the height of an element

* px: how many pixels
* em: size is relative to the default size of the given device
* Percent: Percent is a measurement unit relative to the containing block


**Z-index**: measure of importance, the higher the index, the higher it'll be stacked

* ex. give z-index:1 to header (w/ nothing else given an index value) will ensure it sits on top of other elements


**Font-size**: sets the font-size for the text

**color**: sets the color of an elemtent

**Font-Family**: sets what kind of font will be used, can set multiple fonts incase first choice isn't available on the user's given device.

**Background-color**: sets the color of the background

**Text-align**: tells an element how to align the text

* Center: centers the text
* Right: pushes the text to the right
* Left: pushes the text to the left


**Text-decoration**: decorates text with things like underline, overline, and line-through

**Universal Selector**: selects every element

* ex. 
```
{
property:value
}
```


**Pseudo-class Selector (PCS)**:

* a:hoover = what a link looks like when you hover over it
* a:link = what an unvisted link looks like
* a:visited = what a visited link looks like


**First Child**: without using class or ID this PCS selects a specific child of an element

* ex. p:first-child // selects the first paragraph
* ex. p:nth-child(# of the paragraph{paragraph for this ex.} you want to select)


**Media queries**: used with responsive design which allows a site to look good no matter what device it's seen on

**Column**: sets up text into columns
