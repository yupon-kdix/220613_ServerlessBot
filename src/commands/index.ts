import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"
import { ping } from "./ping.ts"
import { aho } from "./aho.ts"

export function onApplicationCommand(interaction:ApplicationCommandInteraction){
  const data = interaction.data
  // 実行されたコマンド名
  // コマンドが増えた場合はこれで分岐すれば良い
  const commandName = data.name;
  let res:InteractionResponse;
  
  switch(commandName){
    case "ping":
      res = ping(interaction);
      break;
    case "aho":
      res = aho(interaction);
      break;
    default:
      res = {
        type:InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content:"This command is unimplemented"
        }
      }
  }
  
  return res;
}