import { workflow } from "@novu/framework";
import { payloadSchema } from './payloadSchema';
import {

  inAppControlSchema,

} from './stepsControlSchema';


// Define the name for your workflow 
const workflowName = 'Inbox Demo';

// Define the workflow
export const inboxDemo = workflow(
  workflowName,
  async ({ step }) => {
    // Define the step for the workflow
    // -----------------------------------in-app step-------------------------------------------------------------------------
    await step.inApp(
      'In App Step',
      async (controls) => {
        const result: {
          subject: string;
          body: string;
          avatar?: string;
          primaryAction?: {
            label: string;
            url: string;
          };
          secondaryAction?: {
            label: string;
            url: string;
          };
        } = {
          subject: controls.inAppSubject,
          body: controls.inAppBody,
        };

        if (controls.showInAppAvatar) {
          result.avatar = controls.inAppAvatar
        }

        if (controls.enablePrimaryAction) {
          result.primaryAction = {
            label: controls.inAppPrimaryActionLabel,
            url: controls.inAppPrimaryActionUrl,
          };
        }

        if (controls.enableSecondaryAction) {
          result.secondaryAction = {
            label: controls.inAppSecondaryActionLabel,
            url: controls.inAppSecondaryActionUrl,
          };
        }
        return result;
      },
      {
        controlSchema: inAppControlSchema
      }
    )

    // -----------------------------------payload schema-------------------------------------------------------------------------
  },
  {
    payloadSchema: payloadSchema
  },
  // -----------------------------------tags-------------------------------------------------------------------------
);
