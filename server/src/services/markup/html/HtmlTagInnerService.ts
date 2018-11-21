import { ChoosingService } from "../../ChoosingService";
import { HtmlTagBindService } from "./HtmlTagBindService";
import { HtmlTagDefaultService } from "./HtmlTagDefaultService";
import { HtmlTagActionService } from "./HtmlTagActionService";
import { HtmlTagTransionService } from "./HtmlTagTransitionService";
import { HtmlTagTransionOutService } from "./HtmlTagTransitionOutService";
import { HtmlTagTransionInService } from "./HtmlTagTransitionInService";

export class HtmlTagInnerService extends ChoosingService {
    public constructor() {
        super([
            new HtmlTagBindService(),
            new HtmlTagActionService(),
            new HtmlTagTransionService(),
            new HtmlTagTransionInService(),
            new HtmlTagTransionOutService(),

            // Fallback service
            new HtmlTagDefaultService()
        ]);
    }
}