# Challenge: Redux

Jorge Palacios

## Description

### Idea

The main goal of this exercise was to comply with the challenge's requirements in terms of pulling data from the global state using Redux. To accomplish that, I created a list of tasks in the `data` folder, and then followed the steps to load the global state using redux and popullating such state with the mentioned data.

### Challenges

I need to keep working on styling and handling events. However, I could successfully create a `MyTask` component, pass it values and handle its styles from that point forward.

I realized Ract Native doesn't have a Checkbox as it was deprecated. To solve this problem I researched a little bit and found the `react-native-paper` project and its Component Library that includes both Checkbox and RadioButton components.

### Improvements from previous version

- Updated Mock to reflect latest changes

- Improved the task styles when it's done to a lighter tone, so the user is focused on the pending tasks.

- Added trash icon for deleting the task

- Improved the reducer so I can implement at least one action, as suggested by the tutor. We implemented a couple:

  - DONE Action: it's triggered when either the text or the checkbox is tapped
  - DELETE Action: it's triggered when the trash icon is tapped

## Mock

Finally, as requested, please find attached the mock.

![Mock](mock.jpg)
