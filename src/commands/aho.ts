import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function aho(interaction:ApplicationCommandInteraction):InteractionResponse {
  // コマンドの情報を取得
  const data = interaction.data
  // コマンドの送信者の情報を取得
  const member = interaction.member

  let a = "";
  switch (a) {
    case "きり":
      a = "きりのあほ"
      break;
    case "えま":
      a = "えまのあほ"
      break;
    case "ろな":
      a = "ろなのあほ"
      break;
    default:
      break;
  }

  // レスポンス本体
  const res: InteractionResponse = {
      // Type 4 reponds with the below message retaining the user's
      // input at the top.
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `${a}`,
      }
    }
  return res;
}