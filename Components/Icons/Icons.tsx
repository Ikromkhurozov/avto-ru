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
