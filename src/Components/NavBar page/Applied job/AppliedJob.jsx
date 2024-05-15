import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const AppliedJob = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appliedJob/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, [user]);

    return (
        <div className="lg:px-16">
            <div className="mt-10 w-[] h-auto border lg:px-16 mx-auto rounded-lg pt-10 pb-20 bg-slate-400">
                <div className="overflow-x-auto ">
                    <table className="table">
                        <thead>
                            <tr className="text-[18px] font-extrabold text-black">
                                <th></th>
                                <th>Job Title</th>
                                <th>Category</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((job) => (
                                <tr key={job._id} className="hover text-base font-medium text-black">
                                    <th></th>
                                    <td>{job.job_title}</td>
                                    <td>{job.job_category}</td>
                                    <td>{job.salary_range}</td>
                                    <td>
                                        <PDFDownloadLink
                                            document={<JobSummary job={job} />}
                                            fileName={`${job.job_title}_summary.pdf`}
                                            style={{ textDecoration: 'none' }}
                                            className="btn btn-success"
                                        >
                                            {({ loading }) =>
                                                loading ? 'Loading document...' : 'Download Summary'
                                            }
                                        </PDFDownloadLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const JobSummary = ({ job }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>{job.job_title}</Text>
                <Text style={styles.text}>Category: {job.job_category}</Text>
                <Text style={styles.text}>Salary: {job.salary_range}</Text>
            </View>
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default AppliedJob;
