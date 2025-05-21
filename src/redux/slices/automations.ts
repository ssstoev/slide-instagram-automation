import { duplicateValidation } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateTriggerProps = {
  trigger?: {
    type?: "COMMENT" | "DM"
    keyword?: string
    types?: string[]
    keywords?: string[]
  }
}

const InitialState: InitialStateTriggerProps = {
  trigger: {
    type: undefined,
    keyword: undefined,
    types: [],
    keywords: []
  }
}

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, 
// typically defined together in a single file. The name comes from splitting up the root Redux state object
// into multiple "slices" of state.
export const AUTOMATION = createSlice({
  name: 'automation',
  initialState: InitialState,
  reducers: {
    TRIGGER: (state, action: PayloadAction<InitialStateTriggerProps>) => {
      state.trigger!.types = duplicateValidation(
        state.trigger?.types!,
        action.payload.trigger?.type!
      )
      return state
    }
  }
})

// An action is a plain JavaScript object that has a type field. 
// You can think of an action as an event that describes something that happened in the application.
export const { TRIGGER } = AUTOMATION.actions
export default AUTOMATION.reducer