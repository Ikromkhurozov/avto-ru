import React from "react";

export const MenuLogo = ({
     width = "35",
     height = "35",
     color = "#E60000",
 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width={width} height={height} color={color}>
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"/>
    </svg>
);

export const SearchIcon = ({
   width = "22",
   height = "22",
   color = "#787879",

}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width={width} height={height} color={color}>
        <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none"
              stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
              d="M338.29 338.29L448 448"/>
    </svg>
)

export const CloseIcon = ({
   width = "35",
   height = "35",
   color = "#E60000",

}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color} className="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
              d="M368 368L144 144M368 144L144 368"/>
    </svg>)

export const SearchFavIcon = ({
  width = "24",
  height = "24",
  color = "#000",

}) => (
    < svg
        xmlns = "http://www.w3.org/2000/svg"
        width={width} height={height} color={color}
        viewBox = "0 0 24 24"
        className = "IconSvg IconSvg_name_SvgSubscription IconSvg_size_24 HeaderMyLink__icon" >
        <path
        fill = "currentColor"
        d = "M18.823 2.293c-1.204 0-2.418.63-2.817 1.892-.4-1.261-1.614-1.892-2.817-1.892-.803 0-1.601.28-2.149.842a3.65 3.65 0 0 0 0 5.079l4.966 5.079 4.966-5.08a3.65 3.65 0 0 0 0-5.078c-.549-.561-1.346-.842-2.149-.842m-5.634 2c1.023 0 2.576 1.565 2.817 2.088.241-.523 1.771-2.088 2.817-2.088.299 0 .767.33.912.479.654.603.422 1.414-.193 2.044l-3.536 3.616-3.536-3.616c-.616-.63-.846-1.452-.152-2.1.145-.147.572-.423.871-.423m.412 10.186 7.107 7.107L19.293 23l-7.106-7.107A6.96 6.96 0 0 1 8 17.293a7 7 0 1 1 0-14v2c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 0 0 4.167-2.248z"/></svg >)

export const ComparisonIcon = ({
  width = "24",
  height = "24",
  color = "#000",

}) => (
       <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="IconSvg IconSvg_name_SvgCarCompare IconSvg_size_24 HeaderMyLink__icon"><path fill="currentColor" fill-rule="evenodd" d="M11 24V0h2v24zM2.29 11l-.58 1.18A6.33 6.33 0 0 0 1 15.3V21a1 1 0 0 0 1 1h1.57a1 1 0 0 0 1-.93L4.7 19H9v-2H3v-1.68c0-.87.1-1.54.47-2.2l.01-.02.05-.1H9v-2H4.16L5.9 6.67A15 15 0 0 1 9 6.11v-2c-1.77.14-3.23.45-4.61.98L2.8 9H1a1 1 0 0 0-1 1v1zm19.42 0 .58 1.18c.58 1.06.7 2.11.71 3.13V21a1 1 0 0 1-1 1h-1.57a1 1 0 0 1-1-.93L19.3 19H15v-2h6v-1.68c0-.87-.1-1.54-.47-2.2l-.01-.02-.05-.1H15v-2h4.84L18.1 6.67a15 15 0 0 0-3.1-.56v-2c1.77.14 3.23.45 4.61.98L21.2 9H23a1 1 0 0 1 1 1v1z" clip-rule="evenodd"/></svg>)

export const FavIcon = ({
  width = "24",
  height = "24",
  color = "#000",

}) => (
<svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>)

export const MessageIcon = ({
  width = "24",
  height = "24",
  color = "#000",

}) => (
       <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="IconSvg IconSvg_name_SvgChat IconSvg_size_24 HeaderMyLink__icon"><path fill="currentColor" d="M12.506 1C6.711 1 2.013 5.694 2.013 11.485c0 1.909.519 3.693 1.41 5.235L2 22l5.943-1.084a10.45 10.45 0 0 0 4.563 1.054C18.302 21.97 23 17.276 23 11.485S18.302 1 12.506 1m0 2c4.685 0 8.495 3.806 8.495 8.485s-3.81 8.485-8.495 8.485a8.4 8.4 0 0 1-3.692-.855l-.587-.284-.641.117-2.833.517.6-2.225.217-.803-.417-.719a8.47 8.47 0 0 1-1.141-4.233C4.012 6.806 7.822 3 12.506 3M9 11.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9 11.5m5 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 14 11.5m5 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 19 11.5"/></svg>)

export const SellItIcon = ({
  width = "24",
  height = "24",
  color = "#000",

}) => (
       <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="IconSvg IconSvg_name_SvgMyOffers IconSvg_size_24 HeaderMyLink__icon"><path fill="currentColor" fill-rule="evenodd" d="M19 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.67h4.52l.11 1.5c.03.38.36.67.75.67h1.18c.41 0 .75-.32.75-.72V13.6a6.6 6.6 0 0 0-.5-2.43l-.25-.61-.57-1.35-.04-.1-.5-1.64-.33-1.04-.06-.2a14.7 14.7 0 0 0-5-.73H4V5a1 1 0 0 1 1-1zM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3M7.71 8.56l-.15-.53-.04-.01a7 7 0 0 0-1.45-.29h-.03c-.6-.06-1.23-.06-1.92-.06h-.05l-.01-.11v.1a80 80 0 0 1 0 2.9H8.3l-.2-.68-.06-.18-.34-1.14zm-3.7 4v1.77h5.3v-.72c0-.34-.05-.7-.14-1.05zM14 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>)


export const SelectRegionIcon = ({
   width = "24",
   height = "24",
   color = "#0C78ED",

}) => (
    < svg
        xmlns = "http://www.w3.org/2000/svg"
        width={width} height={height} color={color}
        viewBox = "0 0 24 24"
        className = "IconSvg IconSvg_name_SvgGeo IconSvg_size_24 GeoSelect__icon-R79tf" > < path
        d = "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8" /><path d="m7 12 9-4-4 9-1-4z"/></svg >)


export const VkIcon = ({
     width = "24",
     height = "24",
     color = "#0C78ED",

 }) => (
    <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
        <path
            d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86 0 0-26.94 65.6-64.56 108.13-12.2 12.3-17.79 16.4-24.4 16.4-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3 0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77 43.21 63 104.72 96.86 160.13 96.86 33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93 7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35 0-23.57-.51 0 63.55-91.22 70.15-122"
            fill-rule="evenodd"/>
    </svg>)

export const YouTubeIcon = ({
   width = "24",
   height = "24",
   color = "#E60000",

}) => (
    <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
        <path
            d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/>
    </svg>)


export const TwitterIcon = ({
    width = "24",
    height = "24",
    color = "#0C78ED",})  => (
    <svg width={width} height={height} color={color} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
        <path
            d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>
    </svg>)