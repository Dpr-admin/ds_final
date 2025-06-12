
import {  breadcrumbbanner,  } from '../../assets'
import JobStepsHook from './JobStepsHook '
import Expert from './Expert'
import Breadcrumb from '../../Components/Breadcrumb'
import ComingSoon from './ComingSoon'



const index = () => {
  return (
    <div>
        <Breadcrumb
        title="Careers"
        // subtitle="Our Selected Works"
        backgroundImage={breadcrumbbanner}
        overlayText="Careers"
      />
      {/* <JobCategories/> */}
      <JobStepsHook/>
      <ComingSoon />
      {/* <JobListing/> */}
      <Expert/>
    </div>
  )
}

export default index
