

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Input, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Button_74e4e82dfec5b861924d51a615b0a189 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_85ef0838620dea43fdc0ddf081578f40 = useCallback((_e) => addEvents([Event("state.state.convert_to_decimal", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_85ef0838620dea43fdc0ddf081578f40}>
  {`Convert`}
</Button>
  )
}

export function Text_b1693aa608ef7f0bd0ece2b3a16ab854 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text>
  {`Decimal: ${state__state.decimal_number}`}
</Text>
  )
}

export function Text_52ae5563a9ada50de471e121afb9419a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "red"}}>
  {state__state.error_message}
</Text>
  )
}

export function Debounceinput_1afdbf1482ef74b52b926dcde216047b () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_9cafc45a548cd7da8b46ebf26e5f6818 = useCallback((_e0) => addEvents([Event("state.state.update_roman_number", {new_value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_9cafc45a548cd7da8b46ebf26e5f6818} placeholder={`Enter Roman numeral`} sx={{"inputField": true}} type={`text`} value={state__state.roman_number}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <VStack alignItems={`center`} justifyContent={`center`} spacing={`1em`} sx={{"display": "flex", "align-items": "center", "backgroundColor": "#FFB6C1", "height": "100vh", "fontWeight": "bold", "textShadow": "1px 1px 2px rgba(0, 0, 0, 0.2)"}}>
  <Text sx={{"textAlign": "center", "fontSize": "36px", "lineHeight": "44px", "color": "black", "fontFamily": "DM Sans", "maxWidth": "620px", "paddingTop": "16px", "paddingBottom": "16px", "fontWeight": "bold", "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.3)"}}>
  {`Roman Numeral Converter`}
</Text>
  <Text sx={{"color": "black"}}>
  {`Roman:`}
</Text>
  <Debounceinput_1afdbf1482ef74b52b926dcde216047b/>
  <Text_b1693aa608ef7f0bd0ece2b3a16ab854/>
  <Text_52ae5563a9ada50de471e121afb9419a/>
  <Button_74e4e82dfec5b861924d51a615b0a189/>
</VStack>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
