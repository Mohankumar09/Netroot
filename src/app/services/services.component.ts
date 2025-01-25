import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'SAP Solutions Development and Implementation',
      description: 'Delivering tailored SAP solutions to optimize business operations.',
      link: '/services/sap'
    },
    {
      title: 'Custom Software Development',
      description: 'Building software solutions specific to your unique business needs.',
      link: '/services/custom-software'
    },
    {
      title: 'Web and Mobile Application Development',
      description: 'Creating responsive and user-friendly web and mobile apps.',
      link: '/services/web-mobile'
    },
    {
      title: 'Cloud Computing and Digital Transformation Services',
      description: 'Enabling businesses to embrace the power of the cloud and digital tools.',
      link: '/services/cloud-computing'
    },
    {
      title: 'Hardware Import and Supply Services',
      description: 'Providing high-quality hardware products for business infrastructure.',
      link: '/services/hardware-import'
    },
    {
      title: 'Artificial Intelligence (AI) and Machine Learning (ML)',
      description: 'Harnessing AI and ML to drive innovation and efficiency.',
      link: '/services/ai-ml'
    },
    {
      title: 'Augmented Reality (AR) and Virtual Reality (VR) Solutions',
      description: 'Creating immersive experiences using AR and VR technologies.',
      link: '/services/ar-vr'
    },
    {
      title: 'IT Consulting and System Integration',
      description: 'Expert guidance and seamless integration for your IT needs.',
      link: '/services/it-consulting'
    },
    {
      title: 'Ongoing Maintenance and Support',
      description: 'Reliable maintenance and support to ensure system uptime and performance.',
      link: '/services/maintenance-support'
    }
  ];
}
