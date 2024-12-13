import React from "react";
import ProfileChip from "./ProfileClip";

export default function RewardCard(){
    return(
        <div className="reward">
            <div className="reward_point">
                <p className="point">0000</p>
                <p className="rewardtitle">REWARDS</p>
            </div>
            <ProfileChip/>
        </div>
    )
}