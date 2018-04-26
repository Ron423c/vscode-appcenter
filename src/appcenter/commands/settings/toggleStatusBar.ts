import { SettingsHelper } from '../../../helpers/settingsHelper';
import { VsCodeUtils } from '../../../helpers/vsCodeUtils';
import { Strings } from '../../../strings';
import { Command } from '../command';

export default class ToggleStatusBar extends Command {

    public async runNoClient(): Promise<boolean | void> {
        if (!await super.runNoClient()) {
            return false;
        }

        if (SettingsHelper.shouldStatusBarBeShown()) {
            SettingsHelper.setHideStatusBar();
            this.manager.hideStatusBar();
            VsCodeUtils.ShowInfoMessage(Strings.StatusBarHidden);
        } else {
            SettingsHelper.setShowStatusBar();
            this.manager.showStatusBar();
            VsCodeUtils.ShowInfoMessage(Strings.StatusBarShown);
        }
    }
}