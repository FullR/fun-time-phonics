import React from "react";
import bembam from "bembam";
import InfoScreen from "components/info-screen";
import WebLink from "components/web-link";
import pureUpdate from "pure-update";
const {Header, Content, Footer} = InfoScreen;

require("./style.scss");

export default class LicenseScreen extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {onBack, className} = this.props;
    const cn = bembam("License-screen", className);

    return (
      <InfoScreen {...this.props} className={cn}>
        <Content>
          <h1>THE CRITICAL THINKING CO.™</h1>
          <h1>SOFTWARE LICENSE AGREEMENT</h1>
          <h1>IMPORTANT—READ CAREFULLY</h1>
          <p>This is a legal agreement between you (a single entity, company, or educational institution) and The Critical Thinking Co.™ for the software accompanying this agreement, which includes computer Software and associated Documentation. By installing this Software on a computer, you agree to be bound by the terms of this agreement. If you do not agree to the terms of this agreement, promptly erase all copies of the software in your possession and return any Software packaging associated with this order within sixty (60) days of purchase to the place from which you obtained it for a full refund.</p>
          <p>The Critical Thinking Co.™ hereby grants to you a non-exclusive license to use the software product identified above (the "Software") and the accompanying printed materials and User Manual (the "Documentation") on the terms set forth below.</p>
          <p><strong>1. GRANT OF LICENSE.</strong> The Critical Thinking Co.™ grants you the right to install and use this Software Product, provided that this software will be installed only in the quantity and for the computer system(s) indicated (home-use or school/institution-use) at the time of your order for the Software.</p>
          <p><strong>a.</strong> Home-use Licensees may only use the Licensed Software for personal, non-commercial, and non-government purposes.</p>
          <p><strong>b.</strong> School/Institution Licensees may only use the Licensed Software as a teaching aid or in connection with students' course work within the educational facility. If your company or educational institution consists of more than one non-contiguous physical location, then a separate license is required for each separate location. If you have acquired a multiple-user license, you may make the number of additional copies of the Software authorized on the packaging of this Software only.</p>
          <p><strong>2. COPYRIGHT.</strong> The Software Product and Documentation are protected by copyright laws and international copyright treaties as well as other intellectual property laws and treaties. Therefore, you must treat the Software Product like any other copyrighted material. You may not remove, modify, or alter any of The Critical Thinking Co.™'s copyright or trademark notices from any part originally contained in or otherwise created by the Software Product, including any notices contained in the Documentation.</p>
          <p><strong>3. RESTRICTIONS.</strong> You may not modify, translate, reverse engineer, decompile, disassemble, or create derivative works based on the Software, or any portion thereof. The Software Product is licensed as a single product. This Software Product can be installed on a computer as a whole and shall not be separated in parts or disassembled to parts or pieces. You may not rent, lease, or lend the Software or Documentation to any other party without the written permission of The Critical Thinking Co.™ The License is in effect until terminated. The License will terminate automatically if you fail to comply with the limitations described herein. On termination, you must destroy all copies of the Software and Documentation.</p>
          <p><strong>4. WARRANTIES.</strong> The Critical Thinking Co.™ expressly disclaims any warranty for the Software Product. The Software and Documentation are provided "as is" without warranty of any kind, either expressed or implied, including, without limitation, the implied warranties or merchantability, fitness for a particular purpose, or non-infringement. The entire risk arising out of use or performance of the Software remains with you. If media within this package is defective, remove the software application from your device(s) and return any software packaging associated with this order to The Critical Thinking Co.™ within 60 days of the date of purchase, and they will replace it at no charge.</p>
          <p><strong>5. NO LIABILITY FOR CONSEQUENTIAL DAMAGES.</strong> In no event shall The Critical Thinking Co.™ or its suppliers be liable for any damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use of or inability to use this Software Product, even if The Critical Thinking Co.™ has been advised of the possibility of such damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you.</p>
          <p><strong>6. MISCELLANEOUS.</strong> This Agreement represents the complete agreement concerning this license between the parties and supersedes all prior agreements and representations between them. This Agreement may be amended only in writing executed by both parties. The acceptance of any purchase order placed by you is expressly made conditional on your assent to the terms set forth herein, and not those contained within your purchase order. If any provision of this Agreement is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable and the remainder of this Agreement shall nonetheless remain in full force and effect. If you acquired this product in the United States, the laws of the State of California govern this Agreement. If this product was acquired outside the United States, then local laws may apply. Should you have any questions concerning this Agreement, or if you desire to contact The Critical Thinking Co.™ for any reason, please write to The Critical Thinking Co.™, 1991 Sherman Avenue, Suite 200, North Bend, OR, 97459, USA; send a fax to 541-756-1758; send emails to service@criticalthinking.com; call 800-458-4849; or refer to The Critical Thinking Co.™'s website at <WebLink href="http://www.CriticalThinking.com">http://www.CriticalThinking.com</WebLink>.</p>
        </Content>
        <Footer onBack={onBack}/>
      </InfoScreen>
    );
  }
}
